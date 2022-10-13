import React from "react";
//components
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Footer from "../components/Footer";
import Login from "./Login";
//redux
import { useSelector } from "react-redux";

function Home() {
  const success = useSelector((state) => state.success);
  console.log(useSelector((state) => state));

  return (
    <>
      {success ? (
        <>
          <Header />
          <Main />
          <About />
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Home;
