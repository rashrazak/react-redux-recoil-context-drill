import React, {useEffect, useContext, useMemo} from 'react'
import fib from '../../../utils/fib2';
import actions from '../../actions'
import { useDispatch, useSelector } from 'react-redux';

function Fibonacci() {

    const dispatch = useDispatch()
    const state = useSelector((state) =>state.main)

    const {counter, fibonacci} = state
    const {setData} = actions


    const memoize = useMemo(() => {
        let listArr = null
        listArr = fib(counter)
        dispatch(setData({fibonacci:listArr}))
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