import React from "react";
import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

const List = ({ setDarkMode, darkMode }) => {
  return (
    <div className="list">
      <Sidebar setDarkMode={setDarkMode} />
      <div className="listContainer">
        <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
