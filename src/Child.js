import React, {useReducer} from 'react';
import './App.css';
import counterReducer from './counterReducer';

const Child = () => {
    let [state, Output] = useReducer(counterReducer, 0);
    return (
        <div>
            <center><h2>
                This is Child Using Counter Reducer
            </h2>
            <h3>
                Value of Reducer State is : {state}
            </h3>
            <button onClick ={()=> Output('Increase')}>
                Increase Reducer
            </button>
            <button onClick ={()=> Output('Decrease')}>
                Decrease Reducer
            </button></center>
        </div>
    )
}

export default Child;