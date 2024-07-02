import React from 'react';

import '../Game.css';

const GameCircle = ({id, children, className,  onCircleClicked}) => {
    const handleClick = () => {
        onCircleClicked(id);
    };

    return (
        <div className={`gameCircle ${className}`} onClick = {handleClick}>
            {children}
        </div>
    );
};

export default GameCircle;