import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';


export function Quiz_progress_bar(responseArray: Array<string>, num_questions: number): JSX.Element {
    /**
     * JSX element that displays a person's progress through the questions in BasicTest.tsx and DetailedTest.tsx
     *@author: Stephen Sayers
     *
     *@param: responseArray {Array<string>}: the state component containing the responses from the quizzes
     *@param: num_questions {number}: the amount of questions that the quiz contains
     */
    const progressAmt = responseArray.length / num_questions * 100;

    return (
        <p>Fixme: make the progress bar</p>
    );
}