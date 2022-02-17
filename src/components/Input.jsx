import React from 'react';

const Input = ({inputHandler}) => {
    return (
        <input onChange={(e) => inputHandler(e.target.value)} className='input'/>
    );
};

export default Input;