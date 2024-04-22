import React, { useEffect, useState } from 'react';
import { find_key } from "../Components/Footer";
import OpenAI from 'openai';
import "../CSS/ReportScreen.css"
import {Accordion} from "react-bootstrap";

let apiKey: string | undefined = find_key();


// Initialize OpenAI API
const openai = new OpenAI({apiKey: apiKey, dangerouslyAllowBrowser: true});

const sys_role: string = "You are a reviewer of the results of a career test. You are meant to provide people the " +
    "best possible suggestions of what career someone should take based off of the results of the test. All " +
    "responses should be in JSON format where each career suggested should be its own JSON object, the root key for the JSON" +
    "should be titled \"careers\".\n\nThe results of the test the site user took is the following:\n\n" // questions and answers go here

// placeholder string that will be replaced by a function to format the questions and answers of the test into GPT's role
const test: string = "Q1 What do you enjoy doing in your free time?\nA1 Reading and researching\n\nQ2 How do " +
    "you prefer to work?\nA2 Alone, focusing deeply on tasks\n\nQ3 What best describes your decision-making " +
    "process?\nA3 Practical and based on what works best\n\nQ4 Which of these tasks would you enjoy the " +
    "most?\nA4 Solving a complex mathematical problem\n\nQ5 How do you handle stress?\nA5 By planning and " +
    "organizing\n\nQ6 What motivates you to work?\nA6 Personal growth and learning\n\nQ7 Which environment do " +
    "you thrive in?\nA7 A flexible and changing setting"


interface rootJson extends Object {
    careers: Array<JsonParam>
}

interface JsonParam extends Object{
    job: string,
    description: string,
    justification: string,
    training: string,
    orgs: Array<string>
}


function ResultAccordion({GPTReport}: {GPTReport: rootJson | undefined}): JSX.Element {
    /**
     *
     */

    function makeAccordionBody(json_object: JsonParam, i: number) {
        return (
            <Accordion.Item eventKey={i.toString()}>
                <Accordion.Header>{json_object.job}</Accordion.Header>
                <Accordion.Body>
                    <p><b>What is this job:</b> {json_object.description}</p>
                    <br/>
                    <p><b>Why it's a good fit:</b> {json_object.justification}</p>
                    <br/>
                    <p><b>training/education needed:</b> {json_object.training}</p>
                    <br/>
                    <p><b>Organizations in the field:</b> {json_object.orgs.reduce((print_string: string, org: string) => print_string + (org + ", "), "")}</p>
                </Accordion.Body>
            </Accordion.Item>
        )
    }

    return(
        <Accordion alwaysOpen={true}>
            {GPTReport?.careers.map(makeAccordionBody)}
        </Accordion>
    );
}


export default function ResultPage():React.JSX.Element {
    /**
     * the "main" function of ResultPage.tsx renders the page showing the results of the user's test
     */

    useEffect(() => {
        async function gen_report() {
            /**
             * Calls the OpenAI API to generate a JSON file containing ChatGPT's career suggestions, should only be called
             * in the useEffect hook
             * @author Stephen Sayers
             */
            const report = await openai.chat.completions.create({
                model: "gpt-4-turbo",
                messages: [
                    {"role": "system", "content": sys_role + test}, // GPT's role and the test results
                    {
                        "role": "assistant",
                        "content": "What's the 10 best careers for the test taker? Please make the JSON key for each career suggested \"job\""
                    },
                    {
                        "role": "user",
                        "content": "For each career suggested, could you write a short paragraph explaining what that job would entail? " +
                            "Please make the JSON key for each description \"description\""
                    },
                    {
                        "role": "user",
                        "content": "For each career suggested, could you explain why the job is a good fit for " +
                            "the test taker? Respond as if you were speaking to the test taker and, " +
                            "please make the JSON key for each explanation \"justification\""
                    },
                    {
                        "role": "user",
                        "content": "For each career suggested, what would be the training or education needed to get " +
                            "the career? Please make the JSON key for each explanation \"training\""
                    },
                    {
                        "role": "user",
                        "content": "For each career suggested, Could you list a couple of organizations that would hire " +
                            "someone in that field? Please make the JSON key for each explanation \"orgs\""
                    }
                ],
                max_tokens: 4000, // was able to generate pretty good results in the playground with this length
                response_format: {type: "json_object"} // will probably be easier to handle than a string
            })
            console.log("GPT finished due to: " + report.choices[0].finish_reason)
            console.log("JSON provided: " + report.choices[0].message.content)
            if (report.choices[0].message.content !== null) {setReport(JSON.parse(report.choices[0].message.content))}
            else {await gen_report()}
        }
        gen_report()
    }, []);
    const [report, setReport] = useState<rootJson>();


    return (
        <div className={"placeholder-container"}>
            <h2>Test Completed!</h2>
            <ResultAccordion GPTReport={report}/>
        </div>
    );
}