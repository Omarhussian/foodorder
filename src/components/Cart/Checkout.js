import React from "react";
import styles from "./Checkout.module.css";
const confirmHandler = (event) => {
  event.preventDefault();
};

const Checkout = (props) => {
  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel!
      </button>
      <button>Confirm</button>
    </form>
  );
};
export default Checkout;
