import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Article from "../components/article/Article";
import "../css/global.css";
import moment from "moment";
import convertDate from "../utils/convertDate";

const Blog = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3003/articles`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Blog</h1>

      <main>
        {data
          ? data.map((article) => (
              <Article
                key={article.id}
                author={article.author}
                date={"Posté le " + convertDate(article.date)}
                content={article.content}
              ></Article>
            ))
          : null}
      </main>
    </div>
  );
};

export default Blog;
