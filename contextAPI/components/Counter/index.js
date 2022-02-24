import React, {useContext} from 'react'
import {useRouter} from 'next/router'
import {General} from '../../context'

function Main() {
  const router = useRouter()

  const {state, actions} = useContext(General)
  const {setData} = actions
  const {counter} = state

  
  return (
    <div>
      <p><button onClick={() => setData({counter:counter+1})}>Add 1</button>
      <br/>{counter}<br/>
      <button onClick={() => setData({counter:counter-1})}>Minus 1</button></p>
    </div>
  )
}

export default Main