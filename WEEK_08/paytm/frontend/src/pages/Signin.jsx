import { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/signin",
        {
          username,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
      navigate(`/dashboard`);
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      console.error(message);
    }
  };

  return (
    <div className="flex justify-center h-screen bg-black ">
      <div className="flex flex-col justify-center text-white">
        <div className="bg-gray-600 w-90 text-center h-max p-2 px-4">
          <Heading label={"Sign In"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <form onSubmit={handleSubmit}>
            <InputBox
              label={"Username"}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={"johndoe"}
            />
            <InputBox
              label={"Password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={"******"}
            />
            <Button label={"Sign in"} type={"submit"} />
            <ButtonWarning
              label={"Don't have an account?"}
              buttonText={"Sign up"}
              to={"/signup"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
