import React from 'react';

const Input = ({inputHandler, inputValue, placeholder}) => {

    return (
        <input
            value={inputValue}
            onChange={(e) => inputHandler(e.target.value)}
            className='input'
            placeholder={placeholder}
        />
    );
};

export default Input;