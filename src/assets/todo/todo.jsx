import React, { useState, useEffect } from 'react';
import './todo.css';
import vectorImg from "../images/Vector.png";
import trashCanImg from '../images/trash-can.png';
import uncheckedImg from '../images/unchecked.png';
import checkedImg from '../images/checked.png';

const ToDoApp = () => {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    showTasks();
  }, []);

  const addTask = () => {
    if (taskInput === '') {
      alert("You must write something!");
    } else {
      setTaskList(prevTasks => [...prevTasks, { text: taskInput, isChecked: false }]);
      saveData();
    }
    setTaskInput('');
  };

  const toggleTask = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index] = {
      text: taskList[index].text,
      isChecked: !taskList[index].isChecked,
    };
    setTaskList(updatedTasks);
    saveData();
  };

  const removeTask = (index) => {
    const updatedTasks = taskList.filter((task, i) => i !== index);
    setTaskList(updatedTasks);
    saveData();
  };

  const saveData = () => {
    localStorage.setItem("taskData", JSON.stringify(taskList));
  };

  const showTasks = () => {
    const storedData = localStorage.getItem("taskData");
    if (storedData) {
      setTaskList(JSON.parse(storedData));
    }
  };

  return (
    <div className="container">
      <div className="todo-app">
        <div className="row">
          <input
            type="text"
            id="input-box"
            placeholder="Task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button onClick={addTask}><img src={vectorImg} alt="Add Task" /></button>
        </div>
        <ul id="list-container">
          {taskList.map((task, index) => (
            <li
              key={index}
              onClick={() => toggleTask(index)}
              className={task.isChecked ? "checked" : ""}
            >
              {task.text}
              <span>
                <img
                  src={task.isChecked ? checkedImg : uncheckedImg}
                  alt={task.isChecked ? "checked" : "unchecked"}
                />
                <img
                  src={trashCanImg}
                  className="trashCan"
                  alt="trashCan"
                  onClick={() => removeTask(index)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoApp;
