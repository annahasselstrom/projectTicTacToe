import { createSlice } from '@reduxjs/toolkit';
import { calculateWinner } from 'utils/calculateWinner';

// an object with a key: squares, en array som visualiserar våra 9 rutor,
// vid varje dispatch kommer ny null ruta bytas ut till att bli antingen ett
// x eller o
// när någon vunnit blir winner: null, antingen winner: 'x' eller 'o'
// player byts mellan x och o beroende på vems tur det är
const newGame = {
    squares: [
        null, null, null,
        null, null, null,
        null, null, null
    ],
    winner: null,
    player: 'x'
};

export const game = createSlice({
    name: 'game',
    initialState: newGame,
    reducers: {
        // takes the current state and update with dispatched action
        captureSquare: (state, action) => {
            const { index } = action.payload
            console.log(index)

            // if the square is uncaptured, capture it
            // inte i arrayen, inget index, värde null
            // index talar om vilken ruta som är klickad
            if (state.squares[index] === null) {
                state.squares[index] = state.player
            };

            // change the player to the next player
            if (state.player === 'x') {
                state.player = 'o'
            } else {
                state.player = 'x'
            }

            // if a winner hasn't already been declared, then check
            // who winner is
            if (!state.winner) {
                state.winner = calculateWinner(state.squares)
            }
        },
        restart: () => {
            return newGame
        }
    }
});