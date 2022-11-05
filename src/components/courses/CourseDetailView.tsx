import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './course.css';
import QuestionView from "./QuestionView";
import {Container} from "nes-react";

export type Question = {
    question: string;
    answers: string[];
    correct: number;
}

type Course = {
    id: number;
    type: number;
    name: string;
    cash: number;
    questions: Question[];
}

const CourseDetailView = () => {
    const { id } = useParams();
    const [course, setCourse] = useState<Course>();
    const [questionIndex, setQuestionIndex] = useState(0);
    const [displaySummary, setDisplaySummary] = useState(false);
    const [userHP, setUserHP] = useState(100);
    const [enemyHP, setEnemyHP] = useState(100);
    const [cash, setCash] = useState(0);

    const questionsCount = course?.questions.length;
    const fractionHPPerRound = (1 / questionsCount!) * 100;
    const enemyIndex = parseInt(id!) % 3;


    useEffect( () => {
        fetch(`https://chilledu-backend.herokuapp.com/api/games/${id}`)
            .then((response) => response.json()
            ).then((res: Course) => {
            console.log(res);
            setCourse(res);
        });
    }, [id]);

    const goToNextQuestion = (isCorrect: boolean) => {
        console.log(isCorrect);
        if (isCorrect) {
            setEnemyHP(enemyHP - fractionHPPerRound);
            setQuestionIndex(questionIndex + 1);
        } else {
            setUserHP(userHP - fractionHPPerRound);
        }

        if (questionIndex + 1 >= questionsCount!) {
            setCash(course?.cash!);
            setDisplaySummary(true);
        }
    }

    return (
        <div className="CoursesPageContainer">
            <h1>{course && course.name}</h1>
            {displaySummary ?
                <div className="Summary">
                    <h3>Summary</h3>
                    <p>User HP: {userHP}</p>
                    <p>Cash: ${cash}</p>

                </div>
                :
                <div>
                    <h3>Question {questionIndex + 1}/{course && course.questions.length}</h3>
                    <Container>
                        {course && <QuestionView question={course.questions[questionIndex].question}
                                                 answers={course.questions[questionIndex].answers}
                                                 correct={course.questions[questionIndex].correct}
                                                 handleNextQuestion={goToNextQuestion}
                                                 userHP={userHP}
                                                 enemyHP={enemyHP}
                                                 enemyIndex={enemyIndex}/>}
                    </Container>
                </div>
            }
        </div>
    );

}

export default CourseDetailView;