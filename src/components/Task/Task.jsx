import React from "react";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import styles from "./Task.module.css";

const Task = ({ tasks, onDeleteTask, onCompleteTask }) => {

    // console.log(tasks)

  return (
    <div className={styles.taskContainer}>
        
        <div className={styles.completeTask}>
            <div className={styles.completeBtn} onClick={()=> onCompleteTask(tasks.id)}>
                {
                    tasks.completed ? 
                    <RadioButtonCheckedIcon className={styles.completeIcon} /> 
                    : 
                    <RadioButtonUncheckedIcon className={styles.completeIcon}/>
                }
                
            </div>
        </div>

        <div className={styles.taskContainer_name}>
            <h3 className={styles.taskContainer_name__h3}>
                {tasks.name}
            </h3>
        </div>

        <div className={styles.taskContainer_buttons}>
            <div className={styles.taskContainer_buttons_delete}>
                <div 
                    className={styles.deleteBtn}
                    onClick={() => onDeleteTask(tasks.id)}
                >
                    <DeleteIcon 
                        className={styles.editIcon}    
                    />
                </div>
            </div>
            <div className={styles.taskContainer_buttons_editar}>
                <div
                    className={styles.editBtn}
                >
                    <EditIcon className={styles.editIcon}/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Task;
