import React from "react";
import Test from "./components/Test";
import axios from "axios";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=tomato`)
      .then((res) => {
        const recipes = res.data;
        console.log(recipes);
      });
  }, []);

  return <Test></Test>;
};

export default App;
