import {QuestionProps} from "../../reducers/courseSlice";
import React from "react";


const Question = (props: any) => {
    const question: QuestionProps = props.question;
    return(
        <div className="QuestionCard">
            <h3>{question.question}</h3>
            <ul>
                {question.answers.map((answer: string) => (
                    <li>{answer}</li>
                ))}
            </ul>
        </div>
    )
}


export default Question;