import {CourseProps, courseSlice} from "../../reducers/courseSlice";
import React from "react";
import {NavLink, useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks";


const Question = () => {
    const courses = useAppSelector((state) => state.coursesSlice.courses);
    const { id, i } = useParams();
    const course = courses.filter(course => course.id === id)[0];
    const index = parseInt(i || '0');
    const questionsCount = course.questions.length;
    const isItLastQuestion = index + 1 === questionsCount;
    const question = course.questions[index];

    return(
        <div className="QuestionCard">
            Course {course.id}
            <h3>{question.question}</h3>
                {/*set as radio button*/}
                {question.answers.map((answer: string) => (
                    <button>{answer}</button>
                ))}

            {!isItLastQuestion && <NavLink to={`/course/${course.id}/${index+1}`}>
                <button>Next question</button>
            </NavLink>}
            {isItLastQuestion && <NavLink to={`/courses`}>
                <button>Finish course</button>
                </NavLink>}
        </div>
    )
}


export default Question;