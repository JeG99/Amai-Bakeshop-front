import React from "react";
import Navbar from "../components/Navbar";

const Home = (props) => {
  const textFromStorage = JSON.parse(localStorage.getItem('user'));
  console.log(textFromStorage);
  return (
    <div>
      <Navbar />
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
