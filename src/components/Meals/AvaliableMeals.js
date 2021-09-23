import React from "react";
import { useEffect, useState } from "react";
import styles from "./AvaliableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://myfirst-8b245-default-rtdb.firebaseio.com/meals.json"
      );
      const mealsData = await response.json();
      const loadedMeals = [];
      for (const key in mealsData) {
        loadedMeals.push({
          id: key,
          name: mealsData[key].name,
          description: mealsData[key].description,
          price: mealsData[key].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
