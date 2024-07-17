import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./Components/AppLayout";
import Dashboard from "./pages/Dashboard";
import NewNote from "./pages/NewNote";
import AboutUser from "./pages/AboutUser";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="new" element={<NewNote />} />
            <Route path="me" element={<AboutUser />} />
          </Route>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<span>NOT FOUND</span>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
