import React from "react";
import {Question} from "./CourseDetailView";


const QuestionView = ({question, answers}: Question) => {

    return(
        <div className="QuestionCard">
            <h3>{question}</h3>
                {/*set as radio button*/}
                {answers.map((answer: string) => (
                    <button>{answer}</button>
                ))}

            {/*{!isItLastQuestion &&*/}
            {/*    <button>Next question</button>*/}
            {/*}*/}
            {/*{isItLastQuestion && <NavLink to={`/courses`}>*/}
            {/*    <button>Finish course</button>*/}
            {/*    </NavLink>}*/}
        </div>
    )
}


export default QuestionView;