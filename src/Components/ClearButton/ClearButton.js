import React from 'react';
import './ClearButton.css';

const ClearButton = props => {
    const {children, handleClick} = props;
    return (
        <div className='singer'
             onClick={() => {handleClick(children)}}>
            {children}
        </div>
    )
}

export default ClearButton;