import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./layout/Admin";
import Operator from "./layout/Operator";
import {
  Addfarm,
  AddSubAdmin,
  AdminReport,
  BookedSlot,
  RegistredUser,
  Timeslot,
  AdminDashboard,
} from "./pages/Admin/Index";
import { Checkout, IncomingUserList, Scanner } from "./pages/Operator/Index";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add-farm" element={<Addfarm />} />
          <Route path="/admin/add-sub-admin" element={<AddSubAdmin />} />
          <Route path="/admin/admin-report" element={<AdminReport />} />
          <Route path="/admin/booked-slot" element={<BookedSlot />} />
          <Route
            path="/admin/registred-user-list"
            element={<RegistredUser />}
          />
          <Route path="/admin/time-slot" element={<Timeslot />} />
        </Route>
        <Route path="/operator" element={<Operator />}>
          <Route path="/operator/checkout" element={<Checkout />} />
          <Route
            path="/operator/incoming-user-list"
            element={<IncomingUserList />}
          />
          <Route path="/operator/scanner" element={<Scanner />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
