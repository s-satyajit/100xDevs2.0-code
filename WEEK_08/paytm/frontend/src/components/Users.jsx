import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Users() {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      const response = async () => {
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/user/bulk?=${filter}`
        );
        setUsers(data.user);
        console.log(users);
      };
      response();
    } catch (err) {
      console.error(err?.response?.message || err?.message);
    }
  }, [filter]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          className="px-2 py-1 focus:ring-2 focus:ring-gray-200 rounded-md border border-gray-500 w-full"
          placeholder="Search users..."
          onChange={(e) => setFilter(e.target.value)}
        />
        <div>
          {users.map((u) => (
            <User key={u.id} user={u} />
          ))}
        </div>
      </div>
    </>
  );
}

const User = ({ user }) => {
  const navigate = useNavigate();

  const handleSendMoney = (e) => {
    const params = new URLSearchParams({
      id: user.id,
      firstname: user.firstname,
    });

    console.log(user._id);

    const url = `/send?${params.toString()}`;
    navigate(url);
    console.log("Navigating to ", url);
  };

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full flex justify-center h-12 w-12 text-black mt-3.5 bg-slate-200">
          <div className="flex justify-center flex-col h-full text-xl">
            {user.firstname[0].toUpperCase()}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full mt-1 ml-3">
          {user.firstname} {user.lastname}
        </div>
      </div>
      <div className="flex flelx-col justify-center h-full">
        <Button label={"Send Money"} onClick={handleSendMoney} />
      </div>
    </div>
  );
};
