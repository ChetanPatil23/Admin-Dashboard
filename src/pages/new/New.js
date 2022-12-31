import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./new.scss";

const New = () => {
  const [file, setFile] = React.useState("");
  console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h2>Add New User</h2>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://vignette1.wikia.nocookie.net/micronations/images/4/41/No-Avatar-High-Definition.jpg/revision/latest?cb=20140823100428"
              }
              alt="Image"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="formInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="john doe" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="johndoe@xyz.com" />
              </div>
              <div className="formInput">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91-1234567890" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput img">
                Image :
                <label htmlFor="file">
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
