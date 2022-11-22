import React from "react";
import styles from "./TextInput.module.css";

const TextInput = (props) => {
  return (
    <div className={styles.group}>
      <input type="text" value={props.value} onChange={props.onChange} />
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
      <label>Recherche (en anglais)</label>
    </div>
  );
};

export default TextInput;
