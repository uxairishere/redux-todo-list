import React, { useState } from 'react'
import {addTask} from '../redux/todoSlice.redux'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = () => {
        // event.prventDefault();
        if(value.trim().length === 0){
            alert("Enter a task before adding!")
            setValue('');
            return;
        }
        dispatch(
            addTask({
                task: value
            })
        );
        setValue('');
    }

  return (
    <div className='add-task-container'>
    <input
        className='add-task-input'
        placeholder='Enter your task...'
        onChange={(event) => setValue(event.target.value)}
        value={value}
    />
    <button className='btn btn-dark' onClick={onSubmit}>Save</button>
    </div>
  )
}

export default AddTodo