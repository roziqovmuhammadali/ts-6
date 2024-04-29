import LoginPage from "./Login";

import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./Dashboard";
import MarketingPage from "./Marketing";

function App() {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo && true);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={userInfo ? <DashboardPage /> : <Navigate to={`/login`} />}
      />
      <Route path="/marketing" element={<MarketingPage />} />
    </Routes>
  );
}

export default App;
