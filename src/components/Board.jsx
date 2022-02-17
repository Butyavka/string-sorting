import React from 'react';

const Board = ({color, children}) => {
    return (
        <div className={`board ` + color}>
            {children}
        </div>
    );
};

export default Board;