import React, {useEffect, useContext, useMemo} from 'react'
import checkPrime from '../../../utils/prime_number';
import PrimeList from './PrimeList';
import {useRecoilState} from 'recoil'
import counter,{isPrime} from '../../atom'

function PrimeNumber() {

  const [data, setData] = useRecoilState(counter);
  const [bool, setBool] = useRecoilState(isPrime);


  useEffect(() => {
    if (data > 1) {
      setBool(checkPrime(data))
    }else{
        
      setBool(false)
    }
  }, [bool, data])

  
  //demo on e.target.value
  
  return (
      <div style={{border: '1px solid black', padding:'10px'}}>
          <p>PrimeNumber</p>
          <p>{data} {bool ? 'IS A': 'IS NOT A'} PRIME NUMBER</p>
          <PrimeList />

          {/* <input type="number" placeholder="check number if prime or not" value={counter} onChange={(e)=>setData({counter:e.target.value})} /> */}
      </div>
  )
}

export default PrimeNumber