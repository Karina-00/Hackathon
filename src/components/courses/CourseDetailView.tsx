import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './course.css';
import QuestionView from "./QuestionView";
// import "nes.css/css/nes.min.css";

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
    const [questionIndex, setQuestionIndex] = useState(0);
    const [displaySummary, setDisplaySummary] = useState(false);

    const questionsCount = course?.questions.length;
    let userHP = 0;
    let enemyHP = 0;

    useEffect( () => {
        fetch(`https://chilledu-backend.herokuapp.com/api/games/${id}`)
            .then((response) => response.json()
            ).then((res: Course) => {
            console.log(res);
            setCourse(res);
        });
    }, [id]);

    const goToNextQuestion = () => {
        console.log('next question');
        console.log(questionIndex + 1, questionsCount!)
        if (questionIndex + 1 < questionsCount!) {
            setQuestionIndex(questionIndex + 1);
        } else {
            setDisplaySummary(true);
        }
        // setId()
    }

    return(
        <div className="CourseDetailView">
            <h1>{course && course.name}</h1>
            {displaySummary ?
                <div>
                    <h3>Summary</h3>
                    <p>User HP: {userHP}</p>
                    <p>Enemy HP: {enemyHP}</p>

                </div>
                :
                <div>
                    <h3>Question {questionIndex+1}/{course && course.questions.length}</h3>
                    { course && <QuestionView question={course.questions[questionIndex].question} answers={course.questions[questionIndex].answers}  handleNextQuestion={goToNextQuestion}/>}
                </div>
            }

        </div>
    )

}

export default CourseDetailView;