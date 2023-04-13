import React from "react";

import MealsSummary from "./MealsSummary";
import AvailableIngredients from "./AvailableIngredients";

const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailableIngredients />
    </>
  );
};

export default Meals;
