import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/todoSlice.redux'

const TodoItem = (props) => {
    const dispatch = useDispatch();
    const removeTask = () => {
        dispatch(
            deleteTask({
                id: props.id,
            })
        )
    }
  return (
    <div className='todo-item-container'>
    <h3>{props.title}</h3>
    <button className='btn btn-outline-danger' onClick={() => {removeTask()}}><i className='bi bi-x-lg'></i></button>
    </div>
  )
}

export default TodoItem