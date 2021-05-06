import React from 'react';
import { useDispatch } from 'react-redux';
import { Player } from 'components/Player';
import { game } from 'reducers/game';


export const Square = ({ value, index }) => {
    const dispatch = useDispatch();
    console.log(value)

    // skickar med index så att Redux vet vilken ruta som är klickad
    const handleClick = () => {
        dispatch(game.actions.captureSquare({ index })) // or ({ index })
        console.log('hello', index)
    };
        
    return (
        <button
            className={value === null ? 'square clickable' : 'square'}
            type="button"
            onClick={handleClick}>
            <Player value={value} />
        </button>
        )
}