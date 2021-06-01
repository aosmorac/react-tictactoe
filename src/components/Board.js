import React from 'react';
import Piece from "./Piece";

const Board = props => {

    return (
        <div className="board-content">
            {Object.keys(props.cells).map((value, index) => {
                return (
                    <div className="cell" key={index+1}>
                        <Piece
                            symbol={props.cells[index+1]}
                            position={index+1}
                            onClick={props.updateCells}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Board;