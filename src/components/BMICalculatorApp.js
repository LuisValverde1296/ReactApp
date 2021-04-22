import React, { useState } from 'react'
import { useBMI } from '../hooks/useBMI';
import { Container, Row, Col } from 'reactstrap';

export const BMICalculatorApp = () => {

    const [inputs, setInputs] = useState({
        inputHeight: 0,
        inputWeight: 0,
    });

    const handleHeightChange = (e) => {
        setInputs({
            inputHeight: e.target.value,
            inputWeight: inputs.inputWeight
        });
    }

    const handleWeightChange = (e) => {
        setInputs({
            inputHeight: inputs.inputHeight,
            inputWeight: e.target.value
        });
    }

    const handleReset = () =>{
        setInputs({
            inputHeight: 0,
            inputWeight: 0
        })
    }

    const {bmi, status} = useBMI(inputs);

    return (
        <>
            <div>
                <div className="card">
                    <div className="card-header text-center timer-header">
                        <h2 className="text-white">{"BMI healthy weight Calculator"}</h2>
                    </div>
                    <div className="card-body timer-body">
                        <Container>
                            <Col>
                                <Row className="text-center">
                                    <h4 className="text-white">{`Body Mass Index (BMI) = ${bmi}`}</h4>
                                    <h4 className="text-white">{status}</h4>
                                </Row>
                                <Row className="forms">
                                    <form>
                                        <div className="my-label">
                                            <label htmlFor="Height">{"Height(cm)"}</label>
                                        </div>
                                        <input 
                                            id = "Height"
                                            className ="form-control"
                                            type = "number"
                                            min = "0"
                                            max = "250"
                                            value = {inputs.inputHeight}
                                            onChange = { handleHeightChange }
                                        />
                                        <div className="my-label">
                                            <label htmlFor="Weight">{"Weight(kg)"}</label>
                                        </div>
                                        <input
                                            id = "Weight" 
                                            className ="form-control"
                                            type = "number"
                                            min = "0"
                                            max = "500"
                                            value = {inputs.inputWeight}
                                            onChange = { handleWeightChange }
                                        />
                                    </form>
                                </Row>
                            </Col>
                            <button type="button" className="btn btn-timer" onClick={handleReset}>Reset</button>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    )
}
