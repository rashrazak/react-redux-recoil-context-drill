import React, {useEffect, useState} from 'react'
import fib from '../../utils/fib';
function CelciusFahrenheit({counter}) {
  
    
  return (
      <div style={{border: '1px solid black', padding:'10px'}}>
          <p>Celcius to Fahrenheit {counter * 9 / 5 + 32} &#8457;</p>
          <p>Fahrenheit to Celcius {Math.round((counter - 32) * 5 / 9)} &#8451;</p>
      </div>
  )
}

export default CelciusFahrenheit