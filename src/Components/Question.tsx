import {Button} from "react-bootstrap";
import React from "react";

type QuestionProps = {
    questionText: string;
    choices?: string[];
    onChoiceSelected?: (choice: string) => void;
    onTextChange?: (text: string) => void;
    selectedAnswer?: string;
    type: 'multiple-choice' | 'open-ended';  // Make sure this is strict
    textResponse?: string;
    onQuestionChange?: (isGoingForward: boolean) => void;
    currentQuestionIndex: number;
};


const Question: React.FC<QuestionProps> = ({
    questionText,
    choices,
    onChoiceSelected,
    onTextChange,
    selectedAnswer,
    type,
    textResponse,
    onQuestionChange,
    currentQuestionIndex,
}) => {
    return (
        <div className="question-container">
            <p className="question-text">{questionText}</p>
            {type === 'multiple-choice' && choices && onChoiceSelected ? (
                <div className="choices-container">
                    {choices.map((choice, index) => (
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
            {type === 'open-ended' && onTextChange ? (
                <textarea
                    className="text-response"
                    value={textResponse || ''}
                    onChange={(e) => onTextChange(e.target.value)}
                    placeholder="Your answer here..."
                />
            ) : null}
            {currentQuestionIndex > 0 && (
                <Button variant="secondary" onClick={() => onQuestionChange?.(false)}>Previous</Button>
            )}
            <Button variant="primary" onClick={() => onQuestionChange?.(true)}>Next</Button>
        </div>
    );
};

export default Question;