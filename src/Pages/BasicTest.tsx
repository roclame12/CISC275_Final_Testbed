import React from 'react';
import { useState } from 'react';
import { QuizProgressBar } from "../Components/progress";
import "../CSS/Tests.css";


export default function BasicTestScreen() {
    const [responses, setResponses] = useState<string[]>([]);
    const NUM_QUESTIONS: number = 7;  // the amount of questions this test has

    return (
        <div className="test-body">
            <h1>This is a placeholder for the basic test.</h1>
            <QuizProgressBar responseArray={responses} num_questions={NUM_QUESTIONS}/>
        </div>
    )
}