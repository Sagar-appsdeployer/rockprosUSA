import React from "react";
import Sidebar from "../components/Sidebar";
import RockProsUSAlogo from "../assets/download.png";

const Home = () => {
  return (
    <>
      <Sidebar />
   
      <h1 className="text-center">
      <img
                src={RockProsUSAlogo}
                alt="RockProsUSA logo"
                className="mt-4 fa-fade"
                style={{width:"200px"}}
              /> <br /> I am Home Page of RockProsUSA</h1>
    </>
  );
};

export default Home;
