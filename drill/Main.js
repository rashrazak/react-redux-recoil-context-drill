import React, {useEffect, useState} from 'react'
import PrimeNumber from '../drill/PrimeNumber/index.js'
import Fibonacci from './Fibonacci/index.js'
import {useRouter} from 'next/router'
import CelciusFahrenheit from './CelciusFahrenheit/index.js'

function Main() {
  const router = useRouter()
  const [counter, setCounter] = useState(0)

  
  return (
    <div style={{margin:'30px'}}>
      <p>Props Drill Counter</p>
      {/* if u try using counter on setCounter it will delay */}
      <p><button onClick={() => setCounter(old => old + 1)}>Add 1</button>
      <br/>{counter}<br/>
      <button onClick={() => setCounter(old => old - 1)}>Minus 1</button></p>
      <Fibonacci counter={counter}/>
      <br/>
      <PrimeNumber counter={counter}/>
      <br />
      <CelciusFahrenheit counter={counter}/>

      <button onClick={() => router.push('/')}>back</button>
    </div>
  )
}

export default Main