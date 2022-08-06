import React from "react";
import Input from "./Input"

function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="text" placeholder="Password" />
      <Input type="text" placeholder="Confirm Pasword" />
      
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
