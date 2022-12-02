import React from "react";
import Loader from "../loader/Loader";
import TextInput from "../textInput/TextInput";
import styles from "./BlogForm.module.css";

const BlogForm = (props) => {
  const errorMessage = "Veuillez écrire un message de plus de 140 caractères";

  return props.loading ? (
    <Loader />
  ) : (
    <form className={styles.edit_form} onSubmit={props.handleSubmit}>
      <TextInput
        placeholder="Nom"
        value={props.title}
        onChange={props.setTitle}
      />

      <textarea
        className={styles.edit_text}
        cols="30"
        rows="10"
        placeholder="Message"
        value={props.message}
        onChange={props.setMessage}
      ></textarea>

      {props.error ? (
        <span className={styles.error}>{errorMessage}</span>
      ) : null}

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default BlogForm;
