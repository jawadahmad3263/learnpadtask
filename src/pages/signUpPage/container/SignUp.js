import React,{useState} from 'react'
import SignUpUi from '../ui/SignUpUi'
import { useHistory } from "react-router-dom";
export default function SignUp() {

  const history = useHistory();
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
    //function to set signup data
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSignUpData({
        ...signUpData,
        [name]: value,
      });
    };
    //function to post user data to server
    const handleSignUp = (event) => {
      event.preventDefault();
      alert("user registered")
    };
    // back to login form function
    const backToLogin = () => {
      history.push("/login");
    };
    return (
      <SignUpUi
      handleChange={handleChange}
      signUpData={signUpData}
      handleSignUp={handleSignUp}
      backToLogin={backToLogin}
      />
    )
}
