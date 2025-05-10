import { useState } from 'react'
import { TodoProvider } from './contexts'
import './App.css'
import { useEffect } from 'react'
import { useTodo } from './contexts'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'



function App() {
  const [Todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => {prevTodo.id === id ? todo : prevTodo}))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => {
      if (prevTodo.id === id) {
        return {...prevTodo, completed: !prevTodo.completed}
      }
      return prevTodo
    }))
  }

  useEffect(() => {
   const todos = JSON.parse(localStorage.getItem("todos"))
     
    if(todos && todos.lenght > 0) {
      setTodos(todos)
    }  

  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos))
  },[Todos])



  return (
    <TodoProvider value={{Todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {Todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoItem todo={todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
