import React from 'react'

import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.titleContainer_h1}>
          Probá una lista de tareas simple y efectiva
        </h1>
      </div>
      
      <div className={styles.notesBtn}>  
        <Link to='/notes' className={styles.notesBtn_link}>
            <h3
              className={styles.notesBtn_h3}
            >
              ENTRAR
            </h3>
        </Link>
      </div>
    </div>
  )
}

export default Home