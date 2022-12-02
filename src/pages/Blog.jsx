import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Article from "../components/article/Article";
import "../css/global.css";
import convertDate from "../utils/convertDate";
import BlogForm from "../components/blogForm/BlogForm";
import uuid from "react-uuid";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [data.author, data.content]);

  function handleSubmit(event) {
    event.preventDefault();
    postData();
  }

  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:3003/articles");
      setData(res.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  async function postData() {
    const post = {
      id: uuid(),
      author: title,
      content: message,
      date: Date.now(),
    };

    try {
      if (message.length > 140) {
        setError(true);
      } else {
        setError(false);
        const res = await axios.post("http://localhost:3003/articles", post);
        setData((data) => [...data, res.data]);
        setTitle("");
        setMessage("");
      }
    } catch (e) {
      alert(e);
    }
  }

  const removeArticle = async (id) => {
    await axios.delete(`http://localhost:3003/articles/${id}`);
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">Blog</h1>

      <BlogForm
        handleSubmit={handleSubmit}
        title={title}
        setTitle={(e) => setTitle(e.target.value)}
        message={message}
        setMessage={(e) => setMessage(e.target.value)}
        error={error}
      />

      <main>
        {data
          ? data.map((article) => (
              <Article
                loading={loading}
                key={article.id}
                id={article.id}
                author={article.author}
                date={"Posté le " + convertDate(article.date)}
                content={article.content}
                removeArticle={removeArticle}
              ></Article>
            ))
          : null}
      </main>
    </div>
  );
};

export default Blog;
