import React, {useEffect, useState} from 'react'
import PrimeNumber from './PrimeNumber/index.js'
import Fibonacci from './Fibonacci/index.js'
import Counter from './Counter/index.js'
import {useRouter} from 'next/router'
import CelciusFahrenheit from './CelciusFahrenheit/index.js'

function Main() {
  const router = useRouter()
  const [counter, setCounter] = useState(0)

  
  return (
    <div style={{margin:'30px'}}>
      <p>Context API  Counter</p>
      <Counter />
      <br/>
      <Fibonacci/>
      <br/>
      <PrimeNumber/>
      <br />
      <CelciusFahrenheit/>

      <button onClick={() => router.push('/')}>back</button>
    </div>
  )
}

export default Main