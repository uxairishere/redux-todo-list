import React from 'react'
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
    <button className='btn btn-outline-danger' onClick={() => {removeTask()}}>Delete</button>
    </div>
  )
}

export default TodoItem