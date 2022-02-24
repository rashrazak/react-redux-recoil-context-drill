import React, {useEffect, useContext, useMemo} from 'react'
import checkPrime from '../../../utils/prime_number';
import PrimeList from './PrimeList';
import {General} from '../../context'

function PrimeNumber() {

  const {state, actions} = useContext(General)
  const {setData} = actions
  const {counter, isPrime} = state

  useEffect(() => {
    if (counter > 1) {
      setData({isPrime:checkPrime(counter)})
    }else{
        
      setData({isPrime:false})
    }
  }, [isPrime, counter])

  
  //demo on e.target.value
  
  return (
      <div style={{border: '1px solid black', padding:'10px'}}>
          <p>PrimeNumber</p>
          <p>{counter} {isPrime ? 'IS A': 'IS NOT A'} PRIME NUMBER</p>
          <PrimeList />

          {/* <input type="number" placeholder="check number if prime or not" value={counter} onChange={(e)=>setData({counter:e.target.value})} /> */}
      </div>
  )
}

export default PrimeNumber