import React from 'react';
import Grandchild from './Grandchild';
import Child from './Child';

const Parent = (props) => {
    return (
        <div>
            <Grandchild />
            <Child />
        </div>
    )
}

export default Parent;