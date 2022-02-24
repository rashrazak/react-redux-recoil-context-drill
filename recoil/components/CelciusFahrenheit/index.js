import React, {useEffect, useContext} from 'react'
import {useRecoilState} from 'recoil'
import counter from '../../atom'

function CelciusFahrenheit() {
  
  const [data, setData] = useRecoilState(counter);


  return (
      <div style={{border: '1px solid black', padding:'10px'}}>
          <p>Celcius to Fahrenheit {data * 9 / 5 + 32} &#8457;</p>
          <p>Fahrenheit to Celcius {Math.round((data - 32) * 5 / 9)} &#8451;</p>
      </div>
  )
}

export default CelciusFahrenheit