import React from "react";

type QuestionHandler = {
    question: string;
    answers: string[];
    handleNextQuestion: Function;
}

const QuestionView = ({question, answers, handleNextQuestion}: QuestionHandler) => {

    return(
        <div className="QuestionCard">
            <h3>{question}</h3>
                {answers.map((answer: string) => (
                    <button>{answer}</button>
                ))}

            <button onClick={() => handleNextQuestion()}>Next question</button>
        </div>
    )
}


export default QuestionView;