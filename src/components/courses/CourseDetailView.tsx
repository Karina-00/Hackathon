import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './course.css';
import QuestionView from "./QuestionView";

export type Question = {
    question: string;
    answers: string[];
}

type Course = {
    id: number;
    type: number;
    name: string;
    questions: Question[];
}


const CourseDetailView = () => {
    const { id } = useParams();
    const [course, setCourse] = useState<Course>();
    let userHP = 0;
    let enemyHP = 0;
    let questionIndex = 0;

    useEffect( () => {
        fetch(`https://chilledu-backend.herokuapp.com/api/games/${id}`)
            .then((response) => response.json()
            ).then((res: Course) => {
            console.log(res);
            setCourse(res);
        });
    }, [id]);

    return(
        <div className="CourseDetailView">
            <h1>{course && course.name}</h1>
            <h3>Question {questionIndex+1}/{course && course.questions.length}</h3>
            {/*{course && course.questions.map(question =>*/}
            { course && <QuestionView question={course.questions[questionIndex].question} answers={course.questions[questionIndex].answers} />}
            {/*)}*/}
        </div>
    )

}

export default CourseDetailView;