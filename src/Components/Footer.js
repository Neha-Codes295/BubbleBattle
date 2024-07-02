import React from 'react';
import { GAME_STATE_PLAYING } from '../Constraints';

const Footer = ({ onNewGameClick, onSuggestClick, gameState }) => {
    const renderButtons = () => {
        if (gameState === GAME_STATE_PLAYING) {
            return (
                <>
                    <button onClick={onSuggestClick}>Suggest</button>
                    <button onClick={onNewGameClick}>New Game</button>
                </>
            );
        }
        return <button onClick={onNewGameClick}>New Game</button>;
    };

    return (
        <div className="panel footer">
            {renderButtons()}
        </div>
    );
};

export default Footer;
