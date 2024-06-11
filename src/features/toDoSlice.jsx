import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
    name:"toDo",
    initialState:[],
    reducers:{
        addToDo : (state,action) =>{
            state.push({id:Date.now(),text:action.payload})
        },
        removeTodo :(state,action)=>{
            return state.filter(item=>item.id!==action.payload)
        }

    }
})
export const {addToDo,removeTodo} = toDoSlice.actions
export default toDoSlice.reducer