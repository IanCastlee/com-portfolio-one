import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "../components/organisms/landing/Landing";
import Home from "../components/organisms/home/Home";
import ViewAllShots from "../components/organisms/viewAllShots/ViewAllShots";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shots/:categId" element={<ViewAllShots />} />
      </Routes>
    </Router>
  );
}

export default App;
