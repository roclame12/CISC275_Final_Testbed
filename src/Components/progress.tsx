import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "../CSS/Progress.css";

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
                variant="success"/>
        </div>
    );
}