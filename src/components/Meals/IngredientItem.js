import React, { useContext } from "react";

import IngredientItemForm from "./IngredientItemForm";
import CartContext from "../store/cart-context";
import styles from "./IngredientItem.module.css";

const IngredientItem = (props) => {
  const cartCtx = useContext(CartContext);

  const calories = `${props.calories} kcal`;

  console.log(props);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      calories: props.calories,
    });
  };

  return (
    <li className={styles.ingredient}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.calories}>{calories}</div>
      </div>
      <div>
        <IngredientItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default IngredientItem;
