import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToDo } from "../features/toDoSlice"
const AddToDo =()=>{
    const [text,setText]=useState()
    const dispatch = useDispatch()
    const handleSubmit = (text)=>{
      dispatch(addToDo(text))
      setText('')

    }
    return(
        <>
        <input type="text" value ={text} onChange={e=>setText(e.target.value)}></input>
        <button onClick={()=>handleSubmit(text)}>Add</button>
      
        </>
    )
}
export default AddToDo