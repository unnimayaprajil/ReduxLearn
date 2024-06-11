import { useDispatch } from "react-redux"
import { removeTodo } from "../features/toDoSlice"

const ToDoItems = ({ toDos }) => {
    const dispatch =useDispatch()
    const deleteHandler=(id)=>{
        dispatch(removeTodo(id))
    }
    return (
        <>
            <div>ToDoitems</div>
            {toDos.map((item,index) =>
                <ul key={index}>
                    <li >{item.text}</li>
                    <button onClick={()=>deleteHandler(item.id)}>Remove</button>
                </ul>
            )}
        </>
    )
}
export default ToDoItems