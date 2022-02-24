import React, {useEffect, useContext, useMemo} from 'react'
import checkPrime from '../../../utils/prime_number';
import {useRecoilState} from 'recoil'
import counter, {prime} from '../../atom'

function PrimeList() {

    const [data, setData] = useRecoilState(counter);
    const [arr, setArr] = useRecoilState(prime);

    
    const memoize = useMemo(() => {
        let listArr = ''
        for (let index = 2; index <= data; index++) {
            if (checkPrime(index)) {
                listArr = [...listArr, index]
            }
            
        }
        setArr(listArr)
        return listArr
    }, [data])
    

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
            <input type="number" placeholder="check number if prime or not" value={data} onChange={(e)=>setData(parseInt(e.target.value))} />
            
            <br/>
            {memoize && memoize.map((v)=>`${v}, `)}
        </>
    )
}

export default PrimeList