import React from 'react'

const IcrementDecrement = ({handleIncrementDecrement, IncrDecrTime}) => {
    return (
        <div>
            <button id='increment' onClick={(e) => {IncrDecrTime ? IncrDecrTime(e) : handleIncrementDecrement(e)} } className="bg-blue-500 rounded hover:bg-blue-700 hover:text-white px-2 border">Incrementar</button>
            <button id='decrement' onClick={(e) => {IncrDecrTime ? IncrDecrTime(e) : handleIncrementDecrement(e)} } className="outline-none rounded hover:bg-red-500 hover:text-white px-2 border">Decrementar</button>
        </div>
    )
}

export default IcrementDecrement
