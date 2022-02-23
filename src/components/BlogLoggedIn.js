import { useState } from "react";
import LoginForm from "./LoginForm";

const BlogLoggedIn = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const marcusUser = {
    email: "marcus@brederfalt.com",
    password: "guy",
  };

  const mathildaUser = {
    email: "mathilda@realestate.com",
    password: "langth",
  };

  const oskarUser = {
    email: "oskar@realestate.com",
    password: "macforthewin",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      (details.email === adminUser.email &&
        details.password === adminUser.password) ||
      (details.email === marcusUser.email &&
        details.password === marcusUser.password) ||
      (details.email === mathildaUser.email &&
        details.password === mathildaUser.password) ||
      (details.email === oskarUser.email &&
        details.password === oskarUser.password)
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details does not match");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };

  return (
    <div>
      {user.email != "" ? (
        <div>
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <h4>
            Make a post.
            <form></form>
          </h4>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default BlogLoggedIn;
