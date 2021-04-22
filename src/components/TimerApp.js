import React, { useState } from 'react'
import {useTimer} from '../hooks/useTimer'
import { Container } from 'reactstrap';

export const TimerApp = () => {

    const [state, setState] = useState({
        counter: 0,
        timerOn: false
    });

    const handleStart = () => {
        setState({
            counter: state.counter,
            timerOn: true
        });
    }

    const handleStop = () => {
        setState({
            counter: state.counter,
            timerOn: false
        });
    }

    const handleReset = () => {
        setState({
            counter: 0,
            timerOn: false
        });
    }
    
    const {hours, minutes, seconds} = useTimer(state, setState);
    
    return (
        <>
          <div className="card timer-card">
              <div className="card-header text-center timer-header">
                  <h2 className="text-white">{"SNOW timer"}</h2>
              </div>
              <div className="card-body timer-body">
                <Container>
                  <div className="timer-container">
                    <div>
                        <h2 className="text-center text-white">{`${hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}`}</h2>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-timer" onClick={handleStart}>Start</button>
                    <button type="button" className="btn btn-timer" onClick={handleStop}>Stop</button>
                    <button type="button" className="btn btn-timer" onClick={handleReset}>Reset</button>
                  </div>
                </Container>
              </div>
          </div>
        </>
    )
}
