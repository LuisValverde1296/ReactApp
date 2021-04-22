import { useEffect, useState } from 'react';
import { calculateBMI } from '../helpers/calculateBMI';


export const useBMI = (props) => {
    const [state, setState] = useState({
        bmi: 0,
        status: "Normal weight"
    });

    useEffect(() => {

        calculateBMI(props.inputHeight,props.inputWeight)
            .then( state =>{
                if(!isNaN(state.bmi)){
                    setState({
                        bmi: state.bmi,
                        status: state.status
                    });
                } else{
                    setState({
                        bmi: 0,
                        status: state.status
                    });
                }
            } )
        }, [props])

    return state;
}

