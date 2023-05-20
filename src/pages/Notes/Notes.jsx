import React, { useState } from "react";

import Task from "../../components/Task/Task";

import styles from "./Notes.module.css";

const Notes = () => {
  const [task, setTask] = useState({
    name: '',
    id: Date.now()
  });
  const [allTask, setAllTask] = useState([]);

  const handleInputChange = (e) => {
    setTask((prevTask) => ({
      ...prevTask,
      name: e.target.value
    }))
  };

  // console.log(allTask);

  const onDeleteTask = (id) => {
    const filteredTask = allTask.filter(task => task.id !== id);
    setAllTask(filteredTask);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.trim() !== "") {
      setAllTask((prevTask) => [...prevTask, task]);
      setTask({
        name: '',
        id: Date.now()
      });
    }
  };

  return (
    <div className={styles.notesContainer}>
      <div className={styles.notesInput}>
        <div className={styles.showInputs}>
          {allTask.map((tasks) => (
            <Task 
              key={tasks.id} 
              tasks = {tasks}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>

        <div className={styles.notesInput_form}>
          <form onClick={handleSubmit} className={styles.formContainer}>
            <input
              className={styles.formContainer_input}
              type="text"
              name="task"
              value={task.name}
              placeholder="Agregar una tarea"
              onChange={(e) => handleInputChange(e)}
            />
            <button type="submit" className={styles.formContainer_submit}>
              +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Notes;
