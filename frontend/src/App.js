import { BrowserRouter, Routes, Route } from "react-router-dom";

//import pages and components//
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* // everything to do with browser router needs to be inside this // */}
        <NavBar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
