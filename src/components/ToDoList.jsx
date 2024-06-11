import { useSelector } from "react-redux"
import ToDoItems from "./ToDoItems"


const ToDoList =()=>{
    const toDos = useSelector(state =>state.toDo)
    console.log(toDos)
    return(
        <ToDoItems toDos ={toDos}/>
    )
}
export default ToDoList