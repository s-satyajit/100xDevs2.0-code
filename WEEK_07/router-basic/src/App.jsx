import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/")}>Landing</button>
    </>
  );
};

export default App;
