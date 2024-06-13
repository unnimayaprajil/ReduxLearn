import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
const Counter = () => {
    const { count } = useSelector(state => state.counter);
    console.log('count',count)
  const dispatch = useDispatch();
    const incrementHandler = (value)=>{
        console.log('nnnnnnn')
      dispatch(increment(value))
    }
    const decrementHandler = (value)=>{
        dispatch(decrement(value))
      }
      const resetHandler = (value)=>{
        dispatch(reset(value))
      }
    return (
        <>
            <h1>Redux Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={()=>incrementHandler(count)}>Increment</button>
            <button onClick={()=>decrementHandler(count)}>Decrement</button>
            <button onClick={()=>resetHandler(count)}>Reset</button>
        </>
    )
}
export default Counter