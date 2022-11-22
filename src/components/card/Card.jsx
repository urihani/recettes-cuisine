import React from "react";
import styles from "./Card.module.css";
import Loader from "../loader/Loader";

const Card = (props) => {
  return props.loading ? (
    <Loader />
  ) : (
    <article className={styles.card}>
      <h2 className={styles.title}>{props.title}</h2>
      <img className={styles.image} src={props.thumbnail} alt={props.strTags} />
      <div className={styles.text_container}>
        <span className={styles.origin}>{props.origin}</span>
        <p className={styles.text}>{props.recipe.slice(0, 300)}</p>
      </div>
    </article>
  );
};

export default Card;
