import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import Appbar from "../Components/Appbar";
import Footer from "../Components/Footer";
const Operator = () => {
  return (
    <div>
      <Appbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Operator;