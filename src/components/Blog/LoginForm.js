import React, { useState } from "react";
import BlogLoggedIn from "./BlogLoggedIn";
import ReusableButton from "../ReusableComponents/ReusableButton";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2 className = "title" id ="sellersLogin">Sellers Login</h2>
        {error != "" ? <div>{error}</div> : ""}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            email="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            password="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          ></input>
        </div>
        <ReusableButton type="submit" title="LOGIN"/>
      </div>
    </form>
  );
}

export default LoginForm;