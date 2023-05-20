import React from 'react'

import styles from './Notes.module.css'

const Notes = () => {
  return (
    <div
      className={styles.notesContainer}
    >

      <div
        className={styles.notesInput}
      >
        <div
          className={styles.notesInput_form}
        >
          <form className={styles.formContainer}>
            <input 
              className={styles.formContainer_input} 
              type="text" 
              placeholder='Agregar una tarea'  
            />
            <button 
              type="submit"
              className={styles.formContainer_submit}
            >
              +
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Notes