import React, {useContext} from 'react';
import counterContext from './counterContext';

const Grandchild = () => {

    let counterValue = useContext(counterContext)

    return (
        <div><center>
            <h2>
                This is Grand Child using Counter Context
            </h2>
            <h3>
                Counter Value is : {counterValue[0]}
            </h3>

            <button onClick ={()=> {counterValue[1](++counterValue[0])}}>
                Increase Context
            </button>
            <button onClick ={()=> {counterValue[1](--counterValue[0])}}>
                Decrease Context
            </button></center>
        </div>

    )
}

export default Grandchild;