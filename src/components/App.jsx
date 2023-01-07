import { nanoid } from 'nanoid';
import { useState } from 'react';
import ToDo from './todo/todo';
import ToDoForm from './todoForm/todoForm';
export const App = () => {
  const [todos, setTodos] = useState([]);
  const addTask = userInput => {
    if (userInput) {
      const newItem = {
        id: nanoid(),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };
  const removeTask = id => {
    setTodos([...todos.filter(todo => todo.id !== id)]);
  };
  const handleToggle = id => {
    setTodos([
      ...todos.map(todo =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };
  return (
    <div className="App">
      <header>
        <h1>Список задач : {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map(todo => {
        return (
          <ToDo
            todo={todo}
            toggleTask={handleToggle}
            removeTask={removeTask}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};
