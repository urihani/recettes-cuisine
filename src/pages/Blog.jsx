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
  const [, setContent] = useState("");
  const [error, setError] = useState(false);

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
      console.error(e);
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
      console.error(e);
    }
  }

  const removeArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:3003/articles/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  const updateArticle = async (id, author, content) => {
    try {
      const res = await axios.put(`http://localhost:3003/articles/${id}`, {
        author: author,
        content: content,
        date: Date.now(),
      });
      fetchData();
    } catch (e) {
      console.error(e);
    }
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
                updateArticle={updateArticle}
              ></Article>
            ))
          : null}
      </main>
    </div>
  );
};

export default Blog;
