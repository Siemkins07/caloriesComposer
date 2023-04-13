import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import ImgHeader from "../../assets/headerPhoto-min.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Configure Your Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles[`main-image`]}>
        <img src={ImgHeader} alt="freshMeals" />
      </div>
    </>
  );
};

export default Header;
