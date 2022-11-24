import React from "react";
import styles from "./Article.module.css";

const Article = (props) => {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h2>{props.author}</h2>
        <pre>{props.date}</pre>
      </div>
      <p className={styles.content}>{props.content}</p>
      <div className={styles.button_group}>
        <button className="ripple">Modifier</button>
        <button className="ripple_danger ml_2">X</button>
      </div>
    </article>
  );
};

export default Article;
