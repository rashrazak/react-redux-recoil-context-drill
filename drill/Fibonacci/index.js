import React, {useEffect, useState} from 'react'
import fib from '../../utils/fib';

function Fibonacci({counter}) {

    const [list, setList] = useState('')

    useEffect(() => {
        let listString = ''
        for (let index = 0; index <= counter; index++) {
                listString = `${listString} ${fib(index)},`
            
        }
        setList(listString)
    }, [counter, list])
    
    return (
        <div style={{border: '1px solid black', padding:'10px'}}>
            <p>Fibonacci</p>
            <p>{list}</p>
        </div>
    )
}

export default Fibonacci