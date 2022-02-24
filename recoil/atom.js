import {atom} from 'recoil'
import initialState from './state';


const counter = atom({
  key:'counter',
  default:0
})

const isPrime = atom({
  key:'isPrime',
  default:false
})

const prime = atom({
  key:'prime',
  default:null
})

const fibonacci = atom({
  key:'fibonacci',
  default:null
})


export {counter as default, 
        isPrime, 
        prime,
        fibonacci
      } 