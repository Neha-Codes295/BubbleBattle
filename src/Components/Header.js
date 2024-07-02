import React from 'react';
import {GAME_STATE_WIN, GAME_STATE_DRAW, GAME_STATE_PLAYING} from '../Constraints';

const Header = ({ gameState, player }) => {
    const getStatus = () => {
        if (gameState === GAME_STATE_WIN) {
            return `Player ${player} Wins!`;
        }
        if (gameState === GAME_STATE_DRAW) {
            return `Game is a Draw!`;
        }
        return `Player ${player}'s Turn`;

    }

    return(
        <div className="panel header">
            <div className="header-text">{getStatus()}</div>
        </div>
    );
};

export default Header;