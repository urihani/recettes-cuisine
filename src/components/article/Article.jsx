import axios from "axios";
import React from "react";
import Loader from "../loader/Loader";
import styles from "./Article.module.css";
import { useState, useEffect } from "react";

const Article = (props) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [isInRemoveMode, setisInRemoveMode] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(props.content);
  }, [props.content]);

  function remove() {
    props.removeArticle(props.id);
  }

  function update() {
    props.updateArticle(props.id, props.author, content);
    setIsInEditMode(false);
  }

  function renderContent() {
    if (isInEditMode) {
      return (
        <article className={styles.card}>
          <div className={styles.header}>
            <h2>{props.author}</h2>
            <pre>{props.date}</pre>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
          <div className={styles.button_group}>
            <button className="ripple" onClick={update}>
              Modifier
            </button>
            <button
              className="ripple_danger ml_2"
              onClick={() => setIsInEditMode(false)}
            >
              Annuler
            </button>
          </div>
        </article>
      );
    }

    if (isInRemoveMode) {
      return (
        <article className={styles.card}>
          <h3>Voulez vous vraiment supprimer cet article?</h3>
          <div className={styles.button_group}>
            <button className="ripple" onClick={remove}>
              Oui
            </button>
            <button
              className="ripple_danger ml_2"
              onClick={() => setisInRemoveMode(false)}
            >
              Annuler
            </button>
          </div>
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
