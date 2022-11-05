import React from "react";
import Row from "./games/Row";
import Col from "./games/Col";
import {Button, Container, Progress} from "nes-react";
import EnemyImage1 from '../../assets/enemies/enemy1.png';
import EnemyImage2 from '../../assets/enemies/enemy2.png';
import EnemyImage3 from '../../assets/enemies/enemy3.png';
import ProfilePicture from '../../assets/avatar_placeholder.png';

type QuestionHandler = {
    question: string;
    answers: string[];
    handleNextQuestion: Function;
    userHP: number;
    enemyHP: number;
}

const QuestionView = ({question, answers, handleNextQuestion, userHP, enemyHP}: QuestionHandler) => {

    const enemyImages = [EnemyImage1, EnemyImage2, EnemyImage3];

    return(
        <div className="QuestionView">
            <h3>{question}</h3>
            <Row>
                <Col>
                    <Container centered className="AnswersWrapper">
                        <img className="AvatarWrapper" src={ProfilePicture} alt="enemy image"/>

                        <Progress value={userHP} max={100} error />
                        {userHP}%
                    </Container>
                </Col>
                <Col>
                    <Container className="AnswersWrapper">
                        {answers.map((answer: string) => (
                            <Button primary onClick={() => handleNextQuestion()}>{answer}</Button>
                        ))}
                    </Container>
                </Col>
                <Col>
                    <Container centered className="AnswersWrapper">
                        <img className="AvatarWrapper" src={EnemyImage1} alt="enemy image"/>
                        <Progress value={enemyHP} max={100} error />
                        {enemyHP}%
                    </Container>
                </Col>
            </Row>
            {/*<Row>*/}
            {/*    <Col>*/}
            {/*        <Container dark>Dark</Container>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </div>



    )
}


export default QuestionView;