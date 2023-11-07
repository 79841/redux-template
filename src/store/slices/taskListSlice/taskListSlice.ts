import { TTask } from "@/types/Task";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TaskListSliceState = TTask[]


const initialState : TaskListSliceState = []

export const taskListSlice = createSlice({
    name:"task list",
    initialState,
    reducers:{
        add:(state, action:PayloadAction<TTask>) => { state.push(action.payload) }
        
    }
})