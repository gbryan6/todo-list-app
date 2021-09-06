import React from "react";
import { BiTrashAlt } from "react-icons/bi";
import "./styles.css";

function Todo({ id, description, deleteFc, hour, checkFc, completed }) {
  return (
    <div className="wrapper-todo">
      <div className="task">
        <label class="custom-checkbox">
          <input
            type="checkbox"
            checked={completed}
            onClick={(e) => checkFc(id, e.target.checked)}
          />
          <span className="checkmark"></span>
        </label>
        <p className={completed && "completed"}>{description}</p>
      </div>
      <div className="info-task">
        {completed && (
          <button type="button" onClick={() => deleteFc(id)}>
            <BiTrashAlt />
          </button>
        )}
        <span className={`hour-task ${completed && "completed"}`}>{hour}</span>
      </div>
    </div>
  );
}

export default Todo;
