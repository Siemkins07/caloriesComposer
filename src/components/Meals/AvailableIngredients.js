import React from "react";

import Card from "../UI/Card";
import IngredientItem from "./IngredientItem";
import styles from "./AvailableIngredients.module.css";

const DUMMY_INGREDIENTS = [
  {
    id: "i1",
    name: "Oat flakes",
    description: "Rolled Oats, 50g",
    calories: 187,
  },
  {
    id: "i2",
    name: "Yogurt natural",
    description: "Best choise, 50g",
    calories: 50,
  },
  {
    id: "i3",
    name: "Strawberries",
    description: "Fresh or frozen, 50g",
    calories: 20,
  },
  {
    id: "i4",
    name: "Nutts mix",
    description: "Walnuts, cashews, almonds, 25g",
    calories: 150,
  },
];

const AvailableIngredients = () => {
  const ingredientsList = DUMMY_INGREDIENTS.map((ingredient) => (
    <IngredientItem
      key={ingredient.id}
      id={ingredient.id}
      name={ingredient.name}
      description={ingredient.description}
      calories={ingredient.calories}
    />
  ));

  return (
    <section className={styles.ingredients}>
      <Card>
        <ul>{ingredientsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableIngredients;
