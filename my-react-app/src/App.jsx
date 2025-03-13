import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import UserDashBoard from "./User_DashBoard/UserDashBoard.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UserDashBoard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
