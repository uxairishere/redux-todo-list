import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: new Date().getTime(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        },
        updateTask: (state, action) => {
            state.find(value => value.id === action.payload.id).name = action.payload.value;
            console.log("VALUE UPDATE");
        }

    }
})

export const {addTask, deleteTask, updateTask} = taskSlice.actions;

export default taskSlice.reducer;