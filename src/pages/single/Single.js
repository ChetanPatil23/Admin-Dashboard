import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editBtn">Edit</div>
            <h2 className="title">Information</h2>
            <div className="item">
              <img
                className="image"
                src="https://th.bing.com/th/id/OIP.FlCvDiM99v7ghRF05mpjaAHaEK?pid=ImgDet&rs=1"
                alt="image"
              />
              <div className="details">
                <h1 className="itemTitle">Professor</h1>
                <div className="detailItem">
                  <span className="itemKey">Email ID:</span>
                  <span className="itemValue">professor@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone Number:</span>
                  <span className="itemValue">+1 999 888 766</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">NY - Street 223</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">US</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;
