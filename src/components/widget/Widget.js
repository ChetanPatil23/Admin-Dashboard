import React from "react";
import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { blue } from "@mui/material/colors";

const Widget = ({ type }) => {
  const amount = 100;
  const diff = 20;
  let data;
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlinedIcon className="icon"/>,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlinedIcon className="icon"/>,
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className="icon"/>,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "View details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon"/>,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
