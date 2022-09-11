import MUIDataTable from "mui-datatables";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
export default function List() {
  const getMuiTheme = () =>
    createTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "red",
          },
        },
        MUIDataTablePagination: {
          root: {
            backgroundColor: "#000",
            color: "#fff",
          },
        },
      },
    });
  const [Table, setTable] = useState([]);

  const Getdata = async () => {
    const ListData = await axios.get(
      "http://13.126.128.6:6001/v1/user/userslist"
    );
    setTable(ListData.data.data);
    console.log("list", ListData.data.data);
  };
  useEffect(() => {
    Getdata();
  }, []);

  const columns = [
    {
      name: "id",
      label: "id",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "first_name",
      label: "first_name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "address_line1",
      label: "address_line1",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "email",
      label: "email",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "city",

      label: "city",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  const data = Table;

  const options = {
    filterType: "checkbox",
  };

  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"Employee List"}
          data={data}
          columns={columns}
          options={options}
        />
      </MuiThemeProvider>
    </div>
  );
}
