import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const firstname = searchParams.get("firstname");
  const [amount, setAmount] = useState(null);
  const [from, setFrom] = useState("");

  // console.log(`id: ${id}, firstname: ${firstname}`);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setFrom(res.data.user.id));
  }, []);

  const token = localStorage.getItem("token");
  if (!token) console.log(`Token not found`);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/account/transfer`,
        {
          from,
          amount,
          to: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      response();
    } catch (err) {
      console.error(`Something went wrong: ${err}`);
    }
  };

  return (
    <div className="h-screen bg-black flex justify-center">
      <div className="text-white flex flex-col justify-center">
        <div className="bg-gray-600 w-90 shadow-lg shadow-gray-600 p-2 h-min px-4 text-center rounded-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <Heading label={"Send Money"} />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-1 space-x-1">
              <div className="flex justify-center bg-gray-200 w-12 h-12 rounded-full text-black">
                <div className="flex justify-center text-2xl flex-col">
                  {firstname && firstname.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="ml-2 font-medium text-2xl">
                {firstname &&
                  firstname.charAt(0).toUpperCase() +
                    firstname.slice(1).toLowerCase()}
              </div>
            </div>
            <div>
              <form className="mt-3" onSubmit={handleSubmit}>
                <InputBox
                  label={"Amount (in Rs)"}
                  placeholder={"Enter amount"}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <Button type={"submit"} label={"Initiate Transfer"} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
