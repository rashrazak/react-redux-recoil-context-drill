import React, {useContext} from 'react'
import actions from '../../actions'
import { useDispatch, useSelector } from 'react-redux';

function Main() {
  const dispatch = useDispatch()
  const state = useSelector((state) =>state.main)

  const {setData} = actions
  const {counter} = state

  
  return (
    <div>
      <p><button onClick={() => dispatch(setData({counter:counter+1}))}>Add 1</button>
      <br/>{counter}<br/>
      <button onClick={() => dispatch(setData({counter:counter-1}))}>Minus 1</button></p>
    </div>
  )
}

export default Main