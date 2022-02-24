import React, {useEffect, useContext} from 'react'
import {General} from '../../context'


function CelciusFahrenheit() {
  
  const {state, actions} = useContext(General)
  const {setData} = actions
  const {counter, celcius, fahrenheit} = state

  //demo on update state
  

  return (
      <div style={{border: '1px solid black', padding:'10px'}}>
          <p>Celcius to Fahrenheit {counter * 9 / 5 + 32} &#8457;</p>
          <p>Fahrenheit to Celcius {Math.round((counter - 32) * 5 / 9)} &#8451;</p>
      </div>
  )
}

export default CelciusFahrenheit