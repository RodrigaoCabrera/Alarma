import React, {Fragment} from 'react'

const IcrementDecrement = ({handleIncrementDecrement, IncrDecrTime}) => {
    return (
        <Fragment>
            <button id='decrement' onClick={(e) => {IncrDecrTime ? IncrDecrTime(e) : handleIncrementDecrement(e)} } className="mx-1 outline-none rounded hover:bg-red-500 hover:text-white px-2 border">Decrementar</button>
            <button id='increment' onClick={(e) => {IncrDecrTime ? IncrDecrTime(e) : handleIncrementDecrement(e)} } className="mx-1 bg-blue-500 rounded hover:bg-blue-700 hover:text-white px-2 border">Incrementar</button>
        </Fragment>
    )
}

export default IcrementDecrement
