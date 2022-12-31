import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import CategoryIcon from "@mui/icons-material/Category";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/darkModeContext";
const Sidebar = ({ isOpen }) => {
  const sidebarToggle = isOpen ? "open" : "close";
  const { dispatch } = useGlobalContext();
  return (
    <div className={`sidebar ${sidebarToggle}`}>
      <div className="top">
        <Link to="/" className="link">
          <span className="logo">Chetan Patil</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" className="link">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" className="link">
            <li>
              <GroupIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <li>
            <CategoryIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <BookmarkBorderIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <WysiwygIcon className="icon" />
            <span>System Health</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <WebStoriesIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "SET_DARK_MODE", payload: "dark" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "SET_DARK_MODE", payload: "light" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
