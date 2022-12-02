import axios from "axios";
import React from "react";
import Loader from "../loader/Loader";
import styles from "./Article.module.css";
import { useState } from "react";

const Article = (props) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [isInRemoveMode, setisInRemoveMode] = useState(false);

  async function remove() {
    props.removeArticle(props.id);
  }

  function renderContent() {
    if (isInEditMode) {
      return (
        <article className={styles.card}>
          <div className={styles.header}>
            <input placeholder="Auteur"></input>
            <pre></pre>
          </div>
          <textarea value={props.content} cols="30" rows="10"></textarea>
          <div className={styles.button_group}>
            <button className="ripple" onClick={() => setIsInEditMode(false)}>
              Annuler
            </button>
            <button
              className="ripple_danger ml_2"
              onClick={() => setisInRemoveMode(true)}
            >
              X
            </button>
          </div>
        </article>
      );
    }

    if (isInRemoveMode) {
      return (
        <article className={styles.card}>
          <h3>Voulez vous vraiment supprimer cet article?</h3>
          <button className="ripple" onClick={remove}>
            Oui
          </button>
          <button
            className="ripple_danger ml_2"
            onClick={() => setisInRemoveMode(false)}
          >
            Annuler
          </button>
        </article>
      );
    }

    return (
      <article className={styles.card}>
        <div className={styles.header}>
          <h2>{props.author}</h2>
          <pre>{props.date}</pre>
        </div>
        <p className={styles.content}>{props.content}</p>
        <div className={styles.button_group}>
          <button className="ripple" onClick={() => setIsInEditMode(true)}>
            Modifier
          </button>
          <button
            className="ripple_danger ml_2"
            onClick={() => setisInRemoveMode(true)}
          >
            X
          </button>
        </div>
      </article>
    );
  }

  return renderContent();
};

export default Article;
