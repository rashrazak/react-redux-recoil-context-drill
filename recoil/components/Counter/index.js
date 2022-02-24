import React, {useContext} from 'react'
import {useRouter} from 'next/router'
import {useRecoilState} from 'recoil'
import counter from '../../atom'

function Main() {
  const router = useRouter()

  const [data, setData] = useRecoilState(counter);


  
  return (
    <div>
      <p><button onClick={() => setData(old => old + 1)}>Add 1</button>
      <br/>{data}<br/>
      <button onClick={() => setData(old => old - 1)}>Minus 1</button></p>
    </div>
  )
}

export default Main