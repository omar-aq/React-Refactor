import React from "react";
//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Protected from "../components/Protected";

//redux
// import { useSelector } from "react-redux";
import GuardedRoute from "../components/GuardedRoute";

function Home() {
  // const success = useSelector((state) => state.success);
  // console.log(useSelector((state) => state));

  return (
    <>
      <Header />
      <GuardedRoute path="/protected" component={Protected}>
        <Protected />
      </GuardedRoute>
      <Footer />
    </>
  );
}

export default Home;
