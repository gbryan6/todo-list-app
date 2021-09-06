import React from "react";
import "./styles.css";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { format } from "date-fns";
function Modal({ close, registerFc }) {
  const [newTodo, setNewTodo] = useState({
    description: "",
    hour: format(new Date(), "hh:mm"),
    completed: false,
  });

  function handleRegisterTodo(){
    registerFc(newTodo)
    close()
  }
  return (
    <div className="modal-background">
      <div className="modal-content">
        <header>
          <h2>Cadastrar tarefa</h2>
          <button type="button" onClick={() => close()}>
            <IoClose />
          </button>
        </header>
        <div className="modal-body">
          <textarea
            value={newTodo.description}
            onChange={(e) =>
              setNewTodo({ ...newTodo, description: e.target.value })
            }
          ></textarea>
          <button type="button" onClick={() => handleRegisterTodo()}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
