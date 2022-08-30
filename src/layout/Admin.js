// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { makeStyles } from "@mui/styles";
// import { AppBar, Drawer, IconButton } from "@mui/material";

// import LogoutIcon from "@mui/icons-material/Logout";

// import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import AdminSidebar from "../Components/AdminSidebar";
// import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
// import { createBrowserHistory } from "history";
// import HomeIcon from "@mui/icons-material/Home";

// const Appbar = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const history = createBrowserHistory();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const location = useLocation();

//   const logout = () => {
//     navigate("/");
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar
//         position="fixed"
//         sx={{ flexDirection: "row" }}
//         className={classes.appbar}
//       >
//         <IconButton>
//           {location && location.pathname !== "/admin/dashboard" ? (
//             <ArrowBackRoundedIcon
//               className={classes.appbarMenuIcon}
//               onClick={() => history.back()}
//             />
//           ) : (
//             <MenuRoundedIcon
//               onClick={() => setIsDrawerOpen(true)}
//               className={classes.appbarMenuIcon}
//             />
//           )}
//         </IconButton>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             cursor: "pointer",
//           }}
//         ></div>
//         <IconButton>
//           <HomeIcon
//             style={{ margin: "0 15px" }}
//             onClick={() => navigate("/admin/dashboard")}
//             className={classes.appbarMenuIcon}
//           />
//           <LogoutIcon className={classes.appbarMenuIcon} onClick={logout} />
//         </IconButton>
//       </AppBar>
//       <Drawer
//         anchor="left"
//         open={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//       >
//         <AdminSidebar
//           isDrawerOpen={isDrawerOpen}
//           setIsDrawerOpen={setIsDrawerOpen}
//         />
//       </Drawer>
//     </div>
//   );
// };
// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginBottom: "60px",
//     height: "100%",
//     background: "#fcfcfc",
//   },
//   appbar: {
//     height: "52px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "8px",
//     background: "#020202 !important",
//   },
//   appbarBackIcon: {
//     fontSize: "24px !important",
//   },
//   appbarMenuIcon: {
//     color: "white !important",
//     fontSize: "24px !important",
//     "&:hover": {
//       cursor: "pointer",
//     },
//   },
//   main: {
//     marginTop: "60px",
//     display: "flex",
//     width: "100%",
//     height: "calc(100% - 70px)",
//     alignItems: "center",
//     [theme.breakpoints.down(600)]: {
//       flexWrap: "wrap",
//     },
//   },
//   leftSection: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "50%",
//     height: "max-content",
//     padding: "20px",
//     margin: "20px",
//     borderRadius: "20px !important",
//     "&:hover": {
//       cursor: "pointer",
//     },
//     [theme.breakpoints.down(600)]: {
//       width: "100%",
//     },
//   },
//   carIcon: {
//     fontSize: "50px !important",
//     color: "#257aaf",
//   },
//   playIcon: {
//     fontSize: "40px !important",
//     color: "#1fa85b",
//   },
//   rightSection: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     flexDirection: "column",
//     width: "50%",
//     padding: "20px",
//     margin: "20px",
//     borderRadius: "20px !important",
//     [theme.breakpoints.down(600)]: {
//       width: "100%",
//     },
//   },
//   topicRow: {
//     width: "100%",
//   },
//   topicDoubleHeading: {
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     fontWeight: "bold !important",
//     marginBottom: "10px",
//   },
//   topicDoubleBody: {
//     width: "100%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   divider: {
//     width: "100%",
//     margin: "20px 0",
//   },
//   button: {
//     background: "#0c1572 !important",
//     color: "white !important",
//   },
// }));

// export default Appbar;

import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import Agriculture from "@mui/icons-material/AgricultureRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
import Time from "@mui/icons-material/WatchLaterRounded";
import DocumentScannerRoundedIcon from "@mui/icons-material/DocumentScannerRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
const drawerWidth = 240;
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
function Admin(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {upperList.map((item, index) => (
          <ListItem button key={item.title} onClick={() => navigate(item.url)}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* <Typography paragraph> */}
        <Outlet />
        {/* </Typography> */}
      </Box>
    </Box>
  );
}

Admin.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Admin;
