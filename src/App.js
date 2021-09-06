import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./App.css";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import { MdAdd } from "react-icons/md";

function App() {
  const [todos, setTodos] = useState([]);

  const [showModal, setShowModal] = useState(false);

  function handleRegister(todo) {
    const newTodo = [...todos, todo];
    setTodos(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
  }

  function handleDelete(id) {
    const newTodos = todos.filter((todo, index) => id !== index);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  function handleCheck(id, value) {
    const newTodos = todos.map((todo, index) => {
      if (id === index) {
        todo.completed = value;
      }
      return todo;
    });

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  useEffect(() => {
    const allTodos = JSON.parse(localStorage.getItem("todos"));
    if (allTodos) {
      setTodos(allTodos);
    }
  }, []);

  return (
    <div className="App">
      <div id="container-todo">
        <header className="header-todo">
          <div className="wrapper-date">
            <h1 className="day-title">Sexta-feira, 04</h1>
            <h3 className="month">Setembro</h3>
          </div>
          <p>{todos.length} tasks</p>
          <button className="add-todo" type="button" onClick={() => setShowModal(true)}>
            <MdAdd />
          </button>
        </header>
        <div className="todos-container">
          {todos.map((todo, index) => (
            <Todo
              {...todo}
              key={index}
              id={index}
              deleteFc={(id) => handleDelete(id)}
              checkFc={(id, value) => handleCheck(id, value)}
            />
          ))}
        </div>
      </div>
      {showModal && (
        <Modal
          close={() => setShowModal(false)}
          registerFc={(data) => handleRegister(data)}
        />
      )}
    </div>
  );
}

export default App;
