import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartBtn.module.css";

export default function HeaderCartBtn(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCart = cartCtx.items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.showModalHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCart}</span>
    </button>
  );
}
