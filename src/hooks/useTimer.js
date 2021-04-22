import { useEffect, useState } from 'react';
import { calculateTime } from '../helpers/calculateTime';

export const useTimer = (state, setState) => {
    const [hour, setHour] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {

        const interval = setInterval(() => {
            calculateTime(state.counter)
                .then( time =>{
                    if(state.timerOn){
                        setState({
                            counter: state.counter+1,
                            timerOn: true
                        });
                        setHour({
                            hours: time.hours,
                            minutes: time.minutes,
                            seconds: time.seconds
                        });
                    } else if(!state.timerOn && state.counter === 0){
                        setHour({
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        });
                    }
                } )
        }, 980);
        return () => clearInterval(interval);
    }, [state, setState])

    return hour;
}
