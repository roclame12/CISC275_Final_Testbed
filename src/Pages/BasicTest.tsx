import React from 'react';
import { useState } from 'react';
import { Quiz_progress_bar } from "../Components/progress";
import {Button} from "react-bootstrap";


export default function BasicTestScreen() {
    const [responses, setResponses] = useState<string[]>([]);
    function AddResponses(): JSX.Element {
        return (
            <Button onClick={ () => setResponses([...responses, "Test Response"]) }>Add Response</Button>
        )
    }

    return (
        <div>
            <h1>This is a placeholder for the basic test.</h1>
            <Quiz_progress_bar responseArray={responses} num_questions={7}/>
            <AddResponses/>
        </div>
    )
}