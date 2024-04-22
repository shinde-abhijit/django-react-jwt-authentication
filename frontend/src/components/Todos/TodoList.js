import React from 'react'

const TodoList = ({ todo, onDelete }) => {
  return (
    <div>
        <p>{todo.title}</p>
        <p>{todo.content}</p>
        <p>{todo.priority}</p>
        <button className="delete-button" onClick={()=>onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoList
