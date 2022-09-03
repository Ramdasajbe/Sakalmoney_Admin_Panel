import MUIDataTable from "mui-datatables";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export default function List() {
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
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}
