import React from 'react';
import { useSelector } from 'react-redux';
import { Square } from 'components/Square';
//import { game } from '../reducers/game';
//console.log(game)

// Component container
export const Board = () => {
    // här hämtar vi bara arrayen squares ur initialState newGame
    const squares = useSelector((store) => store.game.squares);
    console.log(squares)
    
    // vi hämtar squares state från Redux
    // sen mappar vi över dessa squares och renderar en 
    // square component för varje square
    return (
        <div className="board">
            {squares.map((value, index) => (
                <Square
                    key={index}
                    value={value}
                    index={index}
                />
            ))}
        </div>
    )
};