import React from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navContainer_ul}>
        <Link to="/" className={styles.navContainer_link}>
          <li className={styles.navContainer_list}>Inicio</li>
        </Link>
        <Link to="/notes" className={styles.navContainer_link}>
          <li className={styles.navContainer_list}>Notas</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
