import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LandingPageLayout from "./Components/LandingPageLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<LandingPageLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Navigate to="/" replace />} />
          </Route>
          <Route path="*" element={<span>NOT FOUND</span>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
