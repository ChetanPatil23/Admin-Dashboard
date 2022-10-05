import KeyboardArrowUpOutlined from "@mui/icons-material/KeyboardArrowUpOutlined";
import React, { useState } from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  var myScrollFunc = function () {
    var y = window.scrollY;
    console.log(y);
    if (y >= 100) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };
  const scrollBack = () => {
    window.scrollTo(0, 0);
  };
  window.addEventListener("scroll", myScrollFunc);
  return (
    <div className="home">
      {isOpen && <Sidebar />}
      <div className="home__container">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="chart">
          <Featured />
          <Chart />
        </div>
        {showScroll && (
          <div className="scroll" onClick={scrollBack}>
            <KeyboardArrowUpOutlined />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
