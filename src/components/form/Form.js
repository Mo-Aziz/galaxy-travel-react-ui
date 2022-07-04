import React from "react";
import "./FormStyles.css";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your full name" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        <label>Subject</label>
        <input type="text" placeholder="Enter a subject" />
        <label>Details</label>
        <textarea rows='6' placeholder=" Type a short message here" />
        <button className="btn"> Submit</button>
      </form>
    </div>
  );
};

export default Form;
