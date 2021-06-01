import React, { useState } from 'react';
import Board from "./Board";

const Game = () => {
    const [winner, setWinner] = useState('');

    const [playing, setPlayStatus] = useState(true);

    const rules =[
        [1,2,3],
        [1,4,7],
        [1,5,9],
        [2,5,8],
        [3,5,7],
        [3,6,9],
        [4,5,6],
        [7,8,9],
    ];

    const [cells, setCells] = useState({
        1: '', 2: '',3: '',4: '',5: '',6: '',7: '',8: '',9: ''
    });

    const [next_symbol, setNextSymbol] = useState('x');

    const symbols = {
        'x': 'X',
        'o': 'O',
    };

    const setPiece = (position) => {

        if (cells[position] == '' && playing) {
            console.log(next_symbol);
            cells[position] = symbols[next_symbol];
            setCells({...cells});
            setNextSymbol(next_symbol === 'x' ? 'o' : 'x');

            updateStatus();
        }

    };

    const updateStatus = () => {
        rules.forEach(rule => {
            if (cells[rule[0]] != '' && cells[rule[0]] == cells[rule[1]] && cells[rule[0]] == cells[rule[2]]) {
                setWinner(cells[rule[0]]);
                setPlayStatus(false);
            }
        });
    }

    const resetGame = () => {
        setCells({1: '', 2: '',3: '',4: '',5: '',6: '',7: '',8: '',9: ''});
        setWinner('');
        setPlayStatus(true);
    }

    return (
        <div className="game-content">
            {playing ? (
                <>
                    <h1>Tic Tac Toe</h1><div className="game-board">
                        <Board cells={cells} updateCells={setPiece} />
                    </div>
                </>
            ) : (
                <>
                    <h3>The winner is <span>{ winner }</span></h3>
                    <button onClick={() => resetGame()}>Juagar nuevamente</button>
                </>
            )}
        </div>
    );
}

export default Game;