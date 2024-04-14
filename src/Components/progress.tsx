import React from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import "../CSS/Progress.css";
import '../CSS/Tests.css'

export function QuizProgressBar({answeredCount, num_questions}: {
    answeredCount: number,
    num_questions: number
}): JSX.Element {
    const progressPercent = Math.floor((answeredCount / num_questions) * 100);

    return (
        <div className="progress-bar-container">
            <h3>Quiz Progress</h3>
            <ProgressBar
                now={progressPercent}
                label={`${progressPercent}%`}
                variant="primary"/>
        </div>
    );
}


export function FinishScreen(): JSX.Element {
    /**
     * When a test is finished this element takes the place of the question box to alert the user that they can go on to
     * the results of the test
     * @author Stephen
     *
     */
    return (
        <div className="question-container"> {/* Takes the place of the question container*/}
            <h2>Congratulations! You've finished the test!</h2>
        </div>
    )
}