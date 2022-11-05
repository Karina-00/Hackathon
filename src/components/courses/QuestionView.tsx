import React from "react";
import Row from "./games/Row";
import Col from "./games/Col";
import {Button, Container, Progress} from "nes-react";
import EnemyImage1 from '../../assets/enemies/enemy1.png';
import EnemyImage2 from '../../assets/enemies/enemy2.png';
import EnemyImage3 from '../../assets/enemies/enemy3.png';
import BlackLongBlack from '../../assets/PeopleAvatars/BlackLongBlack.png';
import Location1 from '../../assets/locationBackground/location1.png';
import Location2 from '../../assets/locationBackground/location2.png';

type QuestionHandler = {
    question: string;
    answers: string[];
    correct: number;
    handleNextQuestion: Function;
    userHP: number;
    enemyHP: number;
    enemyIndex: number;
}

const QuestionView = ({question, answers, correct, handleNextQuestion, userHP, enemyHP, enemyIndex}: QuestionHandler) => {
    const enemyImages = [EnemyImage1, EnemyImage2, EnemyImage3];
    const correctAnswer = answers[correct];

    return(
        <div className="QuestionView">
            <h3>{question}</h3>
            <Row>
                <Col>
                    <Container centered className="AnswersWrapper" style={{backgroundImage: `url(${Location1})`,
                        backgroundPosition: "center", backgroundSize: "cover"}}>
                        <img className="AvatarWrapper" src={BlackLongBlack} alt="enemy image"/>
                        <Progress value={userHP} max={100} error />
                        <p>{Math.round(userHP)}%</p>
                    </Container>
                </Col>
                <Col>
                    <Container className="AnswersWrapper Answers">
                        {answers.map((answer: string) => (
                            <Button primary onClick={() => {
                                return handleNextQuestion(answer === correctAnswer);
                            }}>{answer}</Button>
                        ))}
                    </Container>
                </Col>
                <Col>
                    <Container centered className="AnswersWrapper" style={{backgroundImage: `url(${Location2})`,
                        backgroundPosition: "center", backgroundSize: "cover"}}>
                        <img className="AvatarWrapper" src={enemyImages[enemyIndex]} alt="enemy image"/>
                        <Progress value={enemyHP} max={100} error />
                        <p>{Math.round(enemyHP)}%</p>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}


export default QuestionView;