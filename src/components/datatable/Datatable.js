import React, { useState } from "react";
import "./datatable.scss";

import { DataGrid } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PreviewIcon from "@mui/icons-material/Preview";
import { Link } from "react-router-dom";

const Datatable = () => {
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 27 },
    { id: 6, lastName: "Melisandre", firstName: "Harry", age: 45 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const [rowsList, setRowsList] = useState(rows);

  const handleDelete = (id) => {
    setRowsList(rowsList.filter((row) => row.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "fullName",
      headerName: "User",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <div className="flex">
          <Avatar className="icon" />
          <span>
            {params.row.firstName || ""} {params.row.lastName || ""}
          </span>
        </div>
      ),
    },
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    {
      field: "age",
      headerName: "Age",
      headerAlign: "center",
      align: "center",
      type: "number",
      width: 110,
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to="/users/test" className="link">
              <div className="viewBtn">
                <PreviewIcon />
              </div>
            </Link>
            <div className="delBtn">
              <DeleteIcon onClick={() => handleDelete(params.row.id)} />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatable_add">
        <h2>Add New user</h2>
        <Link style={{ textDecoration: "none" }} to="/users/new">
          <span className="button">Add New</span>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={rowsList}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
