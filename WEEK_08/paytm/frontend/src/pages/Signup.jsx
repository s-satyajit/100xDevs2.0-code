import { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      firstname,
      lastname,
      email,
      password,
    };

    console.log(payload);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/user/signup",
        {
          username,
          firstname,
          lastname,
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
      navigate("/dashboard");
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      console.error(message);
    }
  };

  return (
    <div className="flex justify-center h-screen bg-black">
      <div className="flex flex-col justify-center text-white">
        <div className="bg-gray-600 rounded-lg w-90 text-center p-2 h-max px-4">
          <Heading label={"Sign up"}></Heading>
          <SubHeading label={"Enter your information to create an account"} />
          <form onSubmit={handleSubmit}>
            <InputBox
              type={"text"}
              onChange={(e) => setUsername(e.target.value)}
              label={"Username"}
              placeholder={"johndoe123"}
            />
            <InputBox
              type={"text"}
              onChange={(e) => setFirstname(e.target.value)}
              label={"Firstname"}
              placeholder={"John"}
            />
            <InputBox
              type={"text"}
              onChange={(e) => setLastname(e.target.value)}
              label={"Lastname"}
              placeholder={"Doe"}
            />
            <InputBox
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
              label={"Email"}
              placeholder={"satyajit@gmail.com"}
            />
            <InputBox
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              label={"Password"}
              placeholder={"******"}
            />
            <Button type={"submit"} label={"Sign Up"} />
          </form>
          <ButtonWarning
            label={"Already have an account?"}
            buttonText={"Login"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}
