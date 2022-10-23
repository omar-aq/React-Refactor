import { React, lazy, Suspense } from "react";
import "./css/templatemo-style.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//components

//redux
import { useSelector } from "react-redux";
//lazy
const About = lazy(() => import("./components/About"));
const Login = lazy(() => import("./pages/Login"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  const success = useSelector((state) => state.success);
  console.log(success);
  return (
    <div className="container">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={success ? <Navigate replace to="/" /> : <Login />}
            />
            <Route
              path="/about"
              element={success ? <About /> : <Navigate replace to="/login" />}
            />
            <Route
              path="/contact"
              element={success ? <Contact /> : <Navigate replace to="/login" />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
