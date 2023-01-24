import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../redux/todoSlice.redux'

const TodoItem = (props) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const removeTask = () => {
    dispatch(
      deleteTask({
        id: props.id,
      })
    )
  }

  const showUpdate = () => {
    document.getElementById('updateSection').classList.remove('d-none');
  }

  const edittask = (id) => {
    dispatch(
      updateTask({
        id: id,
        value: value
      })
    )
    document.getElementById('updateSection').classList.add('d-none');

  }
  return (
    <div className='todo-item-container' key={props.id}>
      <h3>{props.title}</h3>
      <button className='btn btn-outline-danger' onClick={() => { removeTask() }}><i class="bi bi-cart-x"></i></button>
      <button className='btn btn-outline-success' onClick={() => { showUpdate() }}><i class="bi bi-pencil-square"></i></button>

      {/* update  */}
      <div id='updateSection' className='updateDiv d-none'>
        <div class="input-group update-container mb-3">
          <input
            type='text'
            className='update-task-input form-control'
            onChange={(event) => setValue(event.target.value)}
            value={value}
            aria-describedby="update-btn"
            placeholder='Update Task...'
          />
          <button className='btn btn-success update-task-btn' id='update-btn' onClick={() => { edittask(props.id) }}><i class="bi bi-pencil-square"></i></button>
        </div>
      </div>

    </div>
  )
}

export default TodoItem