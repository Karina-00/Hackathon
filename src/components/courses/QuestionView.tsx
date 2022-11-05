import React from "react";
import Row from "./games/Row";
import Col from "./games/Col";
import {Button, Container} from "nes-react";
import EnemyImage1 from '../../assets/enemies/enemy1.png';
import EnemyImage2 from '../../assets/enemies/enemy2.png';
import EnemyImage3 from '../../assets/enemies/enemy3.png';
import ProfilePicture from '../../assets/avatar_placeholder.png';

type QuestionHandler = {
    question: string;
    answers: string[];
    handleNextQuestion: Function;
}

const QuestionView = ({question, answers, handleNextQuestion}: QuestionHandler) => {

    const enemyImages = [EnemyImage1, EnemyImage2, EnemyImage3];


    return(
        <div className="QuestionView">
            <h3>{question}</h3>
            <Row>
                <Col>
                    <Container centered className="AnswersWrapper">
                        <img className="AvatarWrapper" src={ProfilePicture} alt="enemy image"/>
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