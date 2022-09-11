import React from "react";
import { readFile, utils } from "xlsx";
import { useState } from "react";
import axios from "axios";
export default function ExcelToJson() {
  const [fileName, setfileName] = useState();
  const [exceldata, setexceldata] = useState([]);
  const handleFile = async (e) => {
    const file = e.target.files[0];
    setfileName(file.name);
    const data = await file.arrayBuffer();
    const workbook = readFile(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = utils.sheet_to_json(worksheet);

    setexceldata(jsonData);
  };
  const Upload_file = async () => {
    // let a = { name: fileName, Excel: exceldata };
    // console.log("value of a", a);
    const response = await axios.post("http://localhost:5100/excel", {
      Desk: "abcd",
      Commodity: "pqr",
    });
    console.log("responce", response);
  };
  return (
    <div>
      <h2>{fileName}</h2>
      <input type="file" onChange={(e) => handleFile(e)} />
      <button
        onClick={() => {
          Upload_file();
        }}
      >
        Upload
      </button>
    </div>
  );
}
