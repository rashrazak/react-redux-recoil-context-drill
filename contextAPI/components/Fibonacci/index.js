import React, {useEffect, useContext, useMemo} from 'react'
import fib from '../../../utils/fib2';
import {General} from '../../context'

function Fibonacci() {

    const {state, actions} = useContext(General)
    const {setData} = actions
    const {counter, fibonacci} = state

    const memoize = useMemo(() => {
        let listArr = null
        listArr = fib(counter)
        setData({fibonacci:listArr})
        return listArr
    }, [counter])

    // useEffect(() => {
    //     let listArr = ''
    //     for (let index = 0; index <= counter; index++) {
    //             listArr = [...listArr, fib(index)]
            
    //     }
    //     setData({fibonacci:listArr})
    // }, [counter])
    
    return (
        <div style={{border: '1px solid black', padding:'10px'}}>
            <p>Fibonacci</p>
            <p>{memoize && memoize.map((v)=>`${v}, `)}</p>
        </div>
    )
}

export default Fibonacci