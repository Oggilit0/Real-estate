import React, { useState } from "react";
import ReusableButton from "../ReusableComponents/ReusableButton";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <h2>Sellers Login</h2>
        {error != "" ? <div>{error}</div> : ""}
        <div>
          <input
            type="email"
            email="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          ></input>
        </div>
        <div>
          <input
            type="password"
            password="password"
            id="password"
            placeholder="Password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          ></input>
        </div>
        <ReusableButton type="submit" title="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
