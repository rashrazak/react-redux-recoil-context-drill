import React, {useEffect, useState} from 'react'
import checkPrime from '../../utils/prime_number';
import PrimeList from './PrimeList';

function PrimeNumber({counter}) {

    const [isPrime, setIsPrime] = useState(false)
    useEffect(() => {
      if (counter > 1) {
        setIsPrime(checkPrime(counter))
      }else{
          
        setIsPrime(false)
      }
    }, [isPrime, counter])
    
    return (
        <div style={{border: '1px solid black', padding:'10px'}}>
            <p>PrimeNumber</p>
            <p>{counter} {isPrime ? 'IS A': 'IS NOT A'} PRIME NUMBER</p>
            <PrimeList counter={counter} />
        </div>
    )
}

export default PrimeNumber