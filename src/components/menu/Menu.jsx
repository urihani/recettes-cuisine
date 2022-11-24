import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <nav className={styles.container}>
      <NavLink
        to="/"
        className={styles.nav_link}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Recettes
      </NavLink>

      <NavLink
        to="/blog"
        className={styles.nav_link}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Blog
      </NavLink>
    </nav>
  );
};

export default Menu;
