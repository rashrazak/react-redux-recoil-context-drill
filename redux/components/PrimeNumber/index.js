import React, {useEffect, useContext, useMemo} from 'react'
import checkPrime from '../../../utils/prime_number';
import PrimeList from './PrimeList';
import actions from '../../actions'
import { useDispatch, useSelector } from 'react-redux';

function PrimeNumber() {

  const dispatch = useDispatch()
  const state = useSelector((state) =>state.main)

  const {counter, isPrime} = state
  const {setData} = actions

  useEffect(() => {
    if (counter > 1) {
      dispatch(setData({isPrime:checkPrime(counter)}))
    }else{
        
      dispatch(setData({isPrime:false}))
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