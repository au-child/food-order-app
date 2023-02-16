import React from "react";
import HeaderCartBtn from "../Layout/HeaderCartBtn";
import classes from "./Header.module.css";
import bgImg from "../../assets/pizza.jpg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Halal Food</h1>
        <HeaderCartBtn showModalHandler={props.showModalHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={bgImg} alt="Meals Image" />
      </div>
    </>
  );
};

export default Header;
