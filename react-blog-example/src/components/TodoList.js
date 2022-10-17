// 这个组件是实现一个todoList的例子

import { useState } from "react"

const TodoListDemo = () => {
  const [todos, setTodos] = useState([
    { label: 'Write tests', status: 'done' },
    { label: 'Sent report', status: 'progress' },
    { label: 'Answer emails', status: 'done' }
    ])
    
  return (
    <TodoItemDemo todos={todos} />
  )
} 

const TodoItemDemo = (props) => {
  const isComplete = (todo) => todo.status === 'done';
  return (
    <ul>
      {
        props.todos.map((todo, i)=>
           <li key={i}>
            {
              isComplete(todo) ? 
              <b>{todo.label}</b> :
              todo.label
            }
          </li>
        )
      }
    </ul>
  )
}


const  TodoList  = () => {
  const [todos, setTodos] = useState([
    { label: 'Write tests', status: 'done' },
    { label: 'Sent report', status: 'progress' },
    { label: 'Answer emails', status: 'done' }
    ])
    
  const isComplete = (todo) => todo.status === 'done';
  return (
    <>
      <TodoItem todos={todos} render={
          todo => isComplete(todo) ? 
          <b>{todo.label}</b> :
          todo.label
        }>
        {/* {
          todo => isComplete(todo) ? 
          <b>{todo.label}</b> :
          todo.label
        } */}
      </TodoItem>
    </>
  )
}

const TodoItem = ({todos, render}) => {
  return (
    <ul>
      {
        todos.map((todo,i)=> <li  key={i}>{render(todo)}</li>)
      }
    </ul>
  )
}


export default TodoList;