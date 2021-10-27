import React, { useState } from "react";
import LoginPageUi from "../ui/LoginPageUi";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [credintial, setCredintial] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  //function to set credintial
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredintial({
      ...credintial,
      [name]: value,
    });
  };

  //function to login user
  const handleLogin = () => {
    alert("you r login now");
  };
  // function to shift to signin form
  const pushToRegister = (event) => {
    event.preventDefault();
    history.push("/signup");
  };
  return (
    <LoginPageUi
      handleChange={handleChange}
      handleLogin={handleLogin}
      credintial={credintial}
      pushToRegister={pushToRegister}
    />
  );
}
