import React from 'react'
import { BMICalculatorApp } from './components/BMICalculatorApp'
import { TimerApp } from './components/TimerApp'
import { Container, Row, Col } from 'reactstrap';
//import {TimerApp} from './components/oldtries/FirstTimerApp'

export const MainApp = () => {
    return (
        <>
            <Container className="parent">
                    <Row>
                        <Col className="child">
                            <h2 className="text-white text-center">{"BMI Calculator App"}</h2>
                            <BMICalculatorApp />
                        </Col>
                        <Col className="child">
                            <h2 className="text-white text-center">{"Timer App"}</h2>
                            <TimerApp />
                        </Col>
                    </Row>
            </Container>
        </>
    )
}
