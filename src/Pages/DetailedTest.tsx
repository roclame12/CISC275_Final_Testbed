import React from 'react';
import { useState } from 'react';
import { QuizProgressBar } from "../Components/progress";
import { Button } from 'react-bootstrap';
import "../CSS/Tests.css";
import Question from "../Components/Question";

const openEndedQuestions = [
    {
        question: "Describe a complex problem you've faced in the past. How did you approach solving it?",
        type: "open-ended" as const
    },
    {
        question: "How do you interact in a team setting? Give examples of your role in different group dynamics.",
        type: "open-ended" as const
    },
    {
        question: "What method do you use to prioritize your tasks at work or in daily life? Please explain why you chose this method.",
        type: "open-ended" as const
    },
    {
        question: "Can you describe a learning experience that significantly impacted your personal or professional development?",
        type: "open-ended" as const
    },
    {
        question: "What project have you been involved with that you found particularly exciting or fulfilling? Describe what made it so.",
        type: "open-ended" as const
    },
    {
        question: "Tell us about a challenge you faced at work or in life. How did you manage and what was the outcome?",
        type: "open-ended" as const
    },
    {
        question: "What aspects of a work culture are most important to you and why?",
        type: "open-ended" as const
    }
];


export default function DetailedTestScreen() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState<string[]>(new Array(openEndedQuestions.length).fill(''));

    const handleTextChange = (text: string) => {
        const updatedResponses = responses.map((response, index) =>
            index === currentQuestionIndex ? text : response
        );
        setResponses(updatedResponses);
    };

    const answeredCount = responses.filter(response => response.trim() !== '').length;

    const navigateQuestions = (direction: number) => {
        setCurrentQuestionIndex(currentQuestionIndex + direction);
    };

    const handleSubmit = () => {
        console.log("Submitted responses: ", responses);
        // Submit logic here
    };

    return (
        <div className="test-body">
            <QuizProgressBar answeredCount={answeredCount} num_questions={openEndedQuestions.length} />
            <Question
                questionText={openEndedQuestions[currentQuestionIndex].question}
                onTextChange={handleTextChange}
                type={openEndedQuestions[currentQuestionIndex].type}
                textResponse={responses[currentQuestionIndex]}
            />
            <div className="navigation-buttons">
                {currentQuestionIndex > 0 && (
                    <Button onClick={() => navigateQuestions(-1)}>Previous</Button>
                )}
                {currentQuestionIndex < openEndedQuestions.length - 1 ? (
                    <Button onClick={() => navigateQuestions(1)}>Next</Button>
                ) : (
                    <Button onClick={handleSubmit}>Submit</Button>
                )}
            </div>
        </div>
    );
}