import React from 'react';
import './button.css';

const isNum = val => {
    return !isNaN(val) || val === "." || val === "0"  || val === "+" ;
};

const Button = props => {
    const {children, handleClick} = props;
    return (
    <div
         className={`button-wrapper ${isNum(children) ? null : 'singer'} `}
         onClick={() => {handleClick(children)}}>
        {children}
    </div>
    )
}

export default Button;