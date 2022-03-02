import { useState } from "react";
import LoginForm from "./LoginForm";
import ReusableButton from "../ReusableComponents/ReusableButton";

const BlogLoggedIn = () => {
  const adminUser = {
    name:"Admin",
    email: "admin@admin.com",
    password: "admin123",
  };

  const marcusUser = {
    name: "Marcus",
    email: "marcus@brederfalt.com",
    password: "guy",
  };

  const mathildaUser = {
    name: "Mathilda",
    email: "mathilda@realestate.com",
    password: "langth",
  };

  const oskarUser = {
    name: "Oskar",
    email: "oskar@realestate.com",
    password: "macforthewin",
  };

  const [user, setUser] = useState({name: "" ,email: "" });
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
        name: user.name,
        email: details.email,
      });
    } else {
      setError("Details does not match");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({email: "" });
  };

  const publish = () =>{
    alert(`Blogpost sent for verification!`);
  }


  return (
    <div>
      {user.email != "" ? (
        <div>
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <h4>
            Make a post:
            <form>
              <textarea/>
              <ReusableButton onClick={publish} title ="Publish"/>
            </form>
          </h4>
          <ReusableButton onClick={Logout} title="LOGOUT"/>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default BlogLoggedIn;
