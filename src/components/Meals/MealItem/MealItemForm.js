import React from "react";
import Input from "../../UI/Input.js";
import styles from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input 
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaulvalue: "1",
        }}
      />
      <button> + Add </button>
    </form>
  );
};
export default MealItemForm;
