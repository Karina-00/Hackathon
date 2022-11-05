import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './course.css';
import QuestionView from "./QuestionView";
import {Container, Sprite, Balloon} from "nes-react";

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
    health: number;
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
    const userFractionHPPerRound = (1 / course?.health!) * 100;
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
        if (isCorrect) {
            setEnemyHP(enemyHP - fractionHPPerRound);
        } else {
            const newUserHP = userHP - userFractionHPPerRound;
            setUserHP(newUserHP);
            if(newUserHP <= 1) {
                setDisplaySummary(true);
            }
        }
        setQuestionIndex(questionIndex + 1);

        if (questionIndex + 1 >= questionsCount! ) {
            setCash(course?.cash!);
            setDisplaySummary(true);
        }
    }

    return (
        <div className="CoursesPageContainer">
            <h1>{course && course.name}</h1>
            {displaySummary ?
                <div className="Summary">
                    {userHP > 0
                        ? <div className="Result">
                            <div style={{ display: "flex" }}>
                                <Sprite sprite="bcrikko" style={{ alignSelf: "flex-end" }} />
                                <Balloon style={{ margin: "2rem", maxWidth: "400px" }} fromLeft>
                                    Congrats! You won!
                                </Balloon>
                            </div>
                    </div>
                        : <div className="Result">
                            <div style={{ display: "flex" }}>
                                <Sprite sprite="kirby" style={{ alignSelf: "flex-end" }} />
                                <Balloon style={{ margin: "2rem", maxWidth: "400px" }} fromLeft>
                                    You lost :( Try again!
                                </Balloon>
                            </div>
                        </div>}
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