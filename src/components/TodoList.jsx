import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector((state) => {
        return state.tasks;
    })
  return (
    <div className='todo-list-container'>
    {
        todos.map((todo) => (
            <TodoItem id={todo.id} title={todo.name}  />
        ))
    }
    </div>
  )
}

export default TodoList