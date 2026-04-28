import React, { useState } from "react";

const ControlledForms = () => {
  let [student, setStudent] = useState({ name: null, email: null });
  function updateTheState(e) {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  console.log("This is from the controlled form");

  return (
    <>
      <h1> hi there </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(student);
        }}
      >
        <div>
          <label htmlFor="a"> </label>
          <input
            type="text"
            name="username"
            onChange={(e) => {
              updateTheState(e);
            }}
            id="username"
            placeholder="username"
          />
        </div>
        <div>
          <label htmlFor="a"> </label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              updateTheState(e);
            }}
            id="email"
            placeholder="email"
          />
        </div>
        <div>
          <label htmlFor="a"> </label>
          <input
            type="password"
            name="password"
            onChange={(e) => {
              updateTheState(e);
            }}
            id="password"
            placeholder="password"
          />
        </div>
        <button> Submit the form </button>
      </form>
      <div>
        <h1> {student.username} </h1>
        <h1> {student.email} </h1>
        <h1> {student.password} </h1>
      </div>
    </>
  );
};
export default ControlledForms;
