import React, {useEffect, useContext, useMemo} from 'react'
import checkPrime from '../../../utils/prime_number';
import actions from '../../actions'
import { useDispatch, useSelector } from 'react-redux';

function PrimeList() {

    const dispatch = useDispatch()
    const state = useSelector((state) =>state.main)

    const {counter, prime} = state
    const {setData} = actions

    
    const memoize = useMemo(() => {
        let listArr = ''
        for (let index = 2; index <= counter; index++) {
            if (checkPrime(index)) {
                listArr = [...listArr, index]
            }
        }
        dispatch(setData({prime:listArr}))
        return listArr
    }, [counter])
    

    // useEffect(() => {
    //     let listArr = ''
    //     for (let index = 2; index <= counter; index++) {
    //         if (checkPrime(index)) {
    //             listArr = [...listArr, index]
    //         }
            
    //     }
    //     dispatch(setData({prime:listArr})
    // }, [counter])

    return (
        <>
            <input type="number" placeholder="check number if prime or not" value={counter} onChange={(e)=>dispatch(setData({counter:parseInt(e.target.value)}))} />
            
            <br/>
            {memoize && memoize.map((v)=>`${v}, `)}
        </>
    )
}

export default PrimeList