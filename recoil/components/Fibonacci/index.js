import React, {useEffect, useContext, useMemo} from 'react'
import fib from '../../../utils/fib2';
import {useRecoilState} from 'recoil'
import counter,{fibonacci} from '../../atom'


function Fibonacci() {

    const [data, setData] = useRecoilState(counter);
    const [arr, setArr] = useRecoilState(fibonacci);


    const memoize = useMemo(() => {
        let listArr = null
        listArr = fib(data)
        setArr(listArr)
        return listArr
    }, [data])

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