import React from "react";
import styles from "./TextInput.module.css";

const TextInput = (props) => {
  return (
    <div className={styles.group}>
      <input
        placeholder={props.placeholder}
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default TextInput;
