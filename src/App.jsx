import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../components/molecules/header/Header";
import Home from "../components/organisms/home/Home";
import CustomCursor from "../components/atoms/customCursor/CustomCursor";
import CustomBackground from "../components/atoms/customBg/CustomBackground";
import "./App.css";
function App() {
  return (
    <Router>
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
