import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT } from '../redux/ActionType'
import { CounterDecrement, CounterIncrement } from '../redux/counter/action'

const Counter = () => {
    const {counter}=useSelector((state)=>state)
 const dispatch=useDispatch()
  return (
    <div>
        <h1>Counter:{counter}</h1>
      <button onClick={()=>dispatch(CounterIncrement())}>+</button>
      <button onClick={()=>dispatch(CounterDecrement())}>-</button>
    </div>
  )
}

export default Counter
