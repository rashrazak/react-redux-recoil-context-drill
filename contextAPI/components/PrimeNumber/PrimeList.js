import React, {useEffect, useContext, useMemo} from 'react'
import checkPrime from '../../../utils/prime_number';
import {General} from '../../context'

function PrimeList() {
    const {state, actions} = useContext(General)
    const {setData} = actions
    const {counter, prime} = state
    
    const memoize = useMemo(() => {
        let listArr = ''
        for (let index = 2; index <= counter; index++) {
            if (checkPrime(index)) {
                listArr = [...listArr, index]
            }
            
        }
        setData({prime:listArr})
        return listArr
    }, [counter])
    

    // useEffect(() => {
    //     let listArr = ''
    //     for (let index = 2; index <= counter; index++) {
    //         if (checkPrime(index)) {
    //             listArr = [...listArr, index]
    //         }
            
    //     }
    //     setData({prime:listArr})
    // }, [counter])

    return (
        <>
            <input type="number" placeholder="check number if prime or not" value={counter} onChange={(e)=>setData({counter:parseInt(e.target.value)})} />
            
            <br/>
            {memoize && memoize.map((v)=>`${v}, `)}
        </>
    )
}

export default PrimeList