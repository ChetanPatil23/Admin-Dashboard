import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableComp = () => {
  const rows = [
    {
      id: 1123,
      product: "Acer Nitro 5",
      customer: "Chetan Patil",
      date: "3 August",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 1723,
      product: "Samsung G6",
      customer: "John Smilga",
      date: "7 September",
      amount: 695,
      method: "Online",
      status: "Approved",
    },
    {
      id: 3124,
      product: "Apple Nitro 9",
      customer: "Was Bose",
      date: "9 June",
      amount: 996,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 1923,
      product: "Mi Note 11",
      customer: "Jake Smith",
      date: "1 February",
      amount: 395,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 1923,
      product: "Nitro X5",
      customer: "Pavan Patil",
      date: "2 July",
      amount: 685,
      method: "Online",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
