import {Button} from "react-bootstrap";
import React from "react";

type QuestionProps = {
    questionJson: questionJsonProps;
    onChoiceSelected?: (choice: string) => void;
    onTextChange?: (text: string) => void;
    selectedAnswer?: string;
    textResponse?: string;
    onQuestionChange?: (isGoingForward: boolean) => void;
    currentQuestionIndex: number;
};


export interface questionJsonProps{ // gives the question JSONs in BasicTest and DetailedTest a consistent interface
    questionText: string,
    choices?: Array<string>
    type: 'multiple-choice' | 'open-ended'  // Make sure this is strict
}


export const Question: React.FC<QuestionProps> = ({
    questionJson,
    onChoiceSelected,
    onTextChange,
    selectedAnswer,
    textResponse,
    onQuestionChange,
    currentQuestionIndex,
}) => {
    return (
        <div className="question-container">
            <h3 className="question-text">{questionJson.questionText}</h3>
            {questionJson.type === 'multiple-choice' && questionJson.choices && onChoiceSelected ? (
                <div className="choices-container">
                    {questionJson.choices.map((choice, index) => (
                        <button
                            key={index}
                            className={`choice-button ${selectedAnswer === choice ? 'selected' : ''}`}
                            onClick={() => onChoiceSelected(choice)}
                        >
                            {choice}
                        </button>
                    ))}
                </div>
            ) : null}
            {questionJson.type === 'open-ended' && onTextChange ? (
                <textarea
                    className="question-text-response"
                    value={textResponse || ''}
                    onChange={(e) => onTextChange(e.target.value)}
                    placeholder="Your answer here..."
                />
            ) : null}
            <div className='nav-buttons-container'>
                {currentQuestionIndex > 0 && (
                    <Button variant="secondary" className="nav-button" onClick={() => onQuestionChange?.(false)}>Previous</Button>
                )}
                <Button variant="primary" className="nav-button" onClick={() => onQuestionChange?.(true)}>Next</Button>
            </div>
        </div>
    );
};
