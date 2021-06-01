import React from 'react';

const Piece = props => {
    return (
        <div
            className="piece-content"
            onClick={() => props.onClick(props.position)}
        >
            {props.symbol}
        </div>
    );
}

export default Piece;