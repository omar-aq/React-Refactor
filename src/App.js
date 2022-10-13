import "./css/templatemo-style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Login from "./pages/Login";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
