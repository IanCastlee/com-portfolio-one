import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/organisms/home/Home";
import "./App.css";
import ViewAllShots from "../components/organisms/viewAllShots/ViewAllShots";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shots/" element={<ViewAllShots />} />
      </Routes>
    </Router>
  );
}

export default App;
