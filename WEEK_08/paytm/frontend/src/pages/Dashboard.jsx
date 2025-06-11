import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

const Dashboard = () => {
  return (
    <div className="h-full bg-black text-white">
      <AppBar />
      <div className="m-8">
        <Balance value={"50000"} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
