import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "../CSS/Progress.css";

export function QuizProgressBar({responseArray, num_questions}: {
    responseArray: Array<string>,
    num_questions: number
}): JSX.Element {
    /**
     * JSX element that displays a person's progress through the questions in BasicTest.tsx and DetailedTest.tsx
     *@author: Stephen Sayers
     *
     *@param: responseArray {Array<string>}: the state component containing the responses from the quizzes
     *@param: num_questions {number}: the amount of questions that the quiz contains
     */
    const progressPercent = Math.floor(responseArray.length / num_questions * 100);

    return (
        <div className="progress-bar-container">
            <h3>Quiz Progress</h3>
            <ProgressBar
                now={progressPercent}
                label={`${progressPercent}%`}
                variant="success"/>
        </div>
    );
}