import { Route, Routes } from "react-router-dom";
import MarketingPage from "./Marketing";
import LoginForm from "./LoginPages/LoginForm";
import NotFound from "./LoginPages/NotFound";
import DashboardPage from "./Dashboard";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LoginForm />} />
      <Route exact path="*" element={<NotFound />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/marketing" element={<MarketingPage />} />
    </Routes>
  );
}

export default App;
