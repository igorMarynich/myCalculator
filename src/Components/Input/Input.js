import React from 'react';
import './Input.css';

const Input = (props) => {
    const {input} = props;
    return(
        <div>
            <div className='input'>{input}</div>
        </div>
    )
}

export default Input;