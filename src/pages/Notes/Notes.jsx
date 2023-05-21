import React, { useEffect, useState } from "react";

import Task from "../../components/Task/Task";

import styles from "./Notes.module.css";

const Notes = () => {
  const [allTask, setAllTask] = useState(() => {
    const storeTasks = localStorage.getItem("tasks");
    return storeTasks ? JSON.parse(storeTasks) : [];
  });
  
  const [task, setTask] = useState({
    name: "",
    completed: false,
    id: Date.now(),
  });

  // console.log(allTask);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTask));
  }, [allTask]);

  useEffect(() => {
    const storeTasks = localStorage.getItem('tasks');
    if(storeTasks) {
      setAllTask(JSON.parse(storeTasks));
    }
  }, [])
  
  const handleInputChange = (e) => {
    setTask((prevTask) => ({
      ...prevTask,
      name: e.target.value,
    }));
  };

  const onDeleteTask = (id) => {
    const filteredTask = allTask.filter((task) => task.id !== id);
    setAllTask(filteredTask);
    localStorage.setItem('tasks', JSON.stringify(filteredTask));
  };

  const onCompleteTask = (id) => {
    setAllTask((prevTask) =>
      prevTask.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const onEditTask = (id, newTask) => {
    setAllTask((prevTask) =>
      prevTask.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            name: newTask,
          };
        }
        return task;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.trim() !== "") {
      setAllTask((prevTask) => [...prevTask, task]);
      setTask({
        name: "",
        id: Date.now(),
        completed: false,
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
              tasks={tasks}
              onDeleteTask={onDeleteTask}
              onCompleteTask={onCompleteTask}
              onEditTask={onEditTask}
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
