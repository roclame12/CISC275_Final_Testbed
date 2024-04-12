type QuestionProps = {
    questionText: string;
    choices?: string[];
    onChoiceSelected?: (choice: string) => void;
    onTextChange?: (text: string) => void;
    selectedAnswer?: string;
    type: 'multiple-choice' | 'open-ended';  // Make sure this is strict
    textResponse?: string;
};

const Question: React.FC<QuestionProps> = ({
    questionText,
    choices,
    onChoiceSelected,
    onTextChange,
    selectedAnswer,
    type,
    textResponse
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
        </div>
    );
};

export default Question;