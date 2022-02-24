import React, {useEffect, useState} from 'react'
import checkPrime from '../../utils/prime_number';
function PrimeList({counter}) {
    //without useEffect and useState
//   return (
//     <>
//         {[...Array(counter)].map((v,i)=>{

//             if (i > 1 && checkPrime(i)) {
//                 return `${i} , `
//             }
//         })}
//     </>
//   )
    
    
    const [list, setList] = useState('')

    useEffect(() => {
        let listString = ''
        for (let index = 2; index <= counter; index++) {
            if (checkPrime(index)) {
                listString = `${listString} ${index},`
            }
            
        }
        setList(listString)
    }, [counter, list])

    return (
        <>
            
            <br/>
            {list}
        </>
    )
}

export default PrimeList