import React, {useEffect, useContext} from 'react'
import actions from '../../actions'
import { useDispatch, useSelector } from 'react-redux';

function CelciusFahrenheit() {

  const dispatch = useDispatch()
  const state = useSelector((state) =>state.main)

  const {counter, celcius, fahrenheit} = state
  const {setData} = actions


  //demo on update state
  

  return (
      <div style={{border: '1px solid black', padding:'10px'}}>
          <p>Celcius to Fahrenheit {counter * 9 / 5 + 32} &#8457;</p>
          <p>Fahrenheit to Celcius {Math.round((counter - 32) * 5 / 9)} &#8451;</p>
      </div>
  )
}

export default CelciusFahrenheit