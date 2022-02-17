import React from 'react';

const Box = ({color, children}) => {

    return (
        <div className={`box ` + color}>
            {children}
        </div>
    );
};

export default Box;