import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import axios from 'axios'

const Dashboard = () => {

  const [username, setUsername] = useState(null)
  const [firstname, setFirstname] = useState(null)
  const [balance, setBalance] = useState(null)
  const [id, setId] = useState(null)

  // useEffect(() => {
  //   console.log(`Updated user: ${username, balance, id}`)
  // }, [username, balance, id])

  useEffect(() => {
    console.log(`Updated username: ${username}`)
  }, [username])

  useEffect(() => {
    console.log(`Updated balance: ${balance}`)
  }, [balance])

  useEffect(() => {
    console.log(`Updated id: ${id}`)
  }, [id])
  
  useEffect(() => {

    const token = localStorage.getItem("token")
    if(!token) console.log(`Token not found`)

    const response = async () => {
      try {
        const {data} = await axios.get(`http://localhost:8080/api/v1/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setUsername(data.user.username)
        setFirstname(data.user.firstname)
        setId(data.user.id)
        setBalance(data.balance.amount)
        console.log(username, id, balance)
      } catch (err) {
        console.log(err)
      }
    }
    response()

  }, [])

  return (
    <div className="h-full bg-black text-white">
      <AppBar username={username} firstname={firstname} />
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
