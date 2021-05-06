import React from 'react';

// tar in value från Square - onClick
// om value är x visa X-bilden
// om value är 0 visa 0-bilden
// renderas av Square 
// Board hämtar initialState - 9 squares at null
// Board mappar över alla nio och renderar dessa i 9 squares
// Från denna array av squares, hämtas value och index, mappas ut
// onClick: index dispatchas till redux
// Redux kollar värdet baserat på om index är null. Är värdet null så sätts
// initialState värdet från player key: 'x'
export const Player = ({ value }) => {
    console.log(value)
    return (
    <>
        {value === 'x' && <span role="img" aria-label="x">❌</span>}
        {value === 'o' && <span role="img" aria-label="o">⭕️</span>}
        </>
    )
};