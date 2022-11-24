import React from "react";
import Card from "../components/card/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import "../css/global.css";
import TextInput from "../components/textInput/TextInput";

const Recettes = () => {
  const [data, setData] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField}`
      )
      .then((res) => {
        if (res.data.meals === null) {
          setData([]);
        } else {
          setData(res.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [searchField]);

  function handleChange(event) {
    setSearchField(event.target.value);
  }

  return (
    <div className="container">
      <h1 className="title">Recettes de cuisine</h1>
      <TextInput value={searchField} onChange={handleChange} />

      <main className="grid">
        {data.length !== 0
          ? data.meals.map((meal) => (
              <Card
                loading={loading}
                key={meal.idMeal}
                title={meal.strMeal}
                origin={meal.strArea}
                thumbnail={meal.strMealThumb}
                recipe={meal.strInstructions}
              ></Card>
            ))
          : null}
      </main>
    </div>
  );
};

export default Recettes;
