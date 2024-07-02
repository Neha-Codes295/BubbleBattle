import React, { useState, useEffect } from 'react';
import '../Game.css';
import Header from './Header';
import Footer from './Footer';
import GameCircle from './GameCircle';
import { isWinner, isDraw, getCompMove } from '../helper';
import { GAME_STATE_PLAYING, NO_Player, Player_1, Player_2, NO_CIRCLES, GAME_STATE_WIN, GAME_STATE_DRAW } from '../Constraints';

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(NO_CIRCLES).fill(NO_Player));
    const [currentPlayer, setCurrentPlyer] = useState(Player_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);

    const initGame = () => {
        setCurrentPlyer(Player_1);
        setGameBoard(Array(NO_CIRCLES).fill(NO_Player));
        setGameState(GAME_STATE_PLAYING);
    }

    const suggestMove = () => {
        circleClicked(getCompMove(gameBoard));
    }

    const initBoard = () => {
        const circles = [];
        for (let i = 0; i < NO_CIRCLES; i++) {
            circles.push(renderCircle(i));
        }
        return circles;
    }

    useEffect(() => {
        if (gameState === GAME_STATE_PLAYING) {
            console.log("Game is starting or in progress...");
        } else if (gameState === GAME_STATE_WIN) {
            console.log("Player", currentPlayer, "wins!");
        } else if (gameState === GAME_STATE_DRAW) {
            console.log("Game is a draw!");
        }
    }, [gameState]);

    const circleClicked = (id) => {
        if (gameState !== GAME_STATE_PLAYING || gameBoard[id] !== NO_Player) return;

        const newGameBoard = gameBoard.map((circle, pos) => {
            if (pos === id) return currentPlayer;
            return circle;
        });

        setGameBoard(newGameBoard);

        if (isWinner(newGameBoard, id, currentPlayer)) {
            setGameState(GAME_STATE_WIN);
        } else if (isDraw(newGameBoard)) {
            setGameState(GAME_STATE_DRAW);
        } else {
            setCurrentPlyer(currentPlayer === Player_1 ? Player_2 : Player_1);
        }
    }

    const renderCircle = id => {
        return <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked={circleClicked} />
    }

    return (
        <>
            <Header gameState={gameState} player={currentPlayer} />
            <div className='gameBoard'>
                {initBoard()}
            </div>
            <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState}/>
        </>
    )
}

export default GameBoard;
