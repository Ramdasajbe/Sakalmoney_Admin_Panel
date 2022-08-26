import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import Agriculture from "@mui/icons-material/AgricultureRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import Time from "@mui/icons-material/WatchLaterRounded";
import DocumentScannerRoundedIcon from "@mui/icons-material/DocumentScannerRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import React from "react";
import { useNavigate } from "react-router-dom";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
const upperList = [
  { icon: <HomeIcon />, title: "Home", url: "/admin/dashboard" },
  { icon: <Agriculture />, title: "Add Farm", url: "/admin/add-farm" },
  { icon: <Time />, title: "Time Slot", url: "/admin/time-slot" },
  {
    icon: <PersonAddRoundedIcon />,
    title: "Add Sub Admin",
    url: "/admin/add-sub-admin",
  },
  {
    icon: <ListAltRoundedIcon />,
    title: "Registred User List",
    url: "/admin/registred-user-list",
  },
  {
    icon: <HowToRegRoundedIcon />,
    title: "Booked Slot",
    url: "/admin/booked-slot",
  },
  {
    icon: <AssignmentRoundedIcon />,
    title: "Admin Report",
    url: "/admin/admin-report",
  },
  {
    icon: <DocumentScannerRoundedIcon />,
    title: "Scanner",
    url: "/operator/scanner",
  },
  {
    icon: <ListAltRoundedIcon />,
    title: "Incoming User List",
    url: "/operator/incoming-user-list",
  },
  {
    icon: <HowToRegRoundedIcon />,
    title: "Checkout User",
    url: "/operator/checkout",
  },
];

const lowerList = [
  {
    icon: <DirectionsCarRoundedIcon />,
    title: "Driver CheckIN-OUT List",
    url: "/admin/checkInOutlist",
  },
  {
    icon: <LocationCityRoundedIcon />,
    title: "Reports",
    url: "/admin/reports",
  },
];

const AdminSidebar = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ width: isDrawerOpen && 250 }}
      role="presentation"
      onClick={() => setIsDrawerOpen(false)}
      onKeyDown={() => setIsDrawerOpen(false)}
    >
      <List>
        {upperList.map((item) => (
          <ListItem button key={item.title} onClick={() => navigate(item.url)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {lowerList.map((item) => (
          <ListItem button key={item.title} onClick={() => navigate(item.url)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminSidebar;
