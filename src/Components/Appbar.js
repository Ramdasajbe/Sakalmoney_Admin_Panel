import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { AppBar, Drawer, IconButton } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AdminSidebar from "../Components/AdminSidebar";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { createBrowserHistory } from "history";
import HomeIcon from "@mui/icons-material/Home";

const Appbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const history = createBrowserHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const logout = () => {
    navigate("/");
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        sx={{ flexDirection: "row" }}
        className={classes.appbar}
      >
        <IconButton>
          {location && location.pathname !== "/admin/dashboard" ? (
            <ArrowBackRoundedIcon
              className={classes.appbarMenuIcon}
              onClick={() => history.back()}
            />
          ) : (
            <MenuRoundedIcon
              onClick={() => setIsDrawerOpen(true)}
              className={classes.appbarMenuIcon}
            />
          )}
        </IconButton>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            cursor: "pointer",
          }}
        ></div>
        <IconButton>
          <HomeIcon
            style={{ margin: "0 15px" }}
            onClick={() => navigate("/admin/dashboard")}
            className={classes.appbarMenuIcon}
          />
          <LogoutIcon className={classes.appbarMenuIcon} onClick={logout} />
        </IconButton>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <AdminSidebar
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
      </Drawer>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "60px",
    height: "100%",
    background: "#fcfcfc",
  },
  appbar: {
    height: "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px",
    background: "#020202 !important",
  },
  appbarBackIcon: {
    fontSize: "24px !important",
  },
  appbarMenuIcon: {
    color: "white !important",
    fontSize: "24px !important",
    "&:hover": {
      cursor: "pointer",
    },
  },
  main: {
    marginTop: "60px",
    display: "flex",
    width: "100%",
    height: "calc(100% - 70px)",
    alignItems: "center",
    [theme.breakpoints.down(600)]: {
      flexWrap: "wrap",
    },
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
    height: "max-content",
    padding: "20px",
    margin: "20px",
    borderRadius: "20px !important",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  },
  carIcon: {
    fontSize: "50px !important",
    color: "#257aaf",
  },
  playIcon: {
    fontSize: "40px !important",
    color: "#1fa85b",
  },
  rightSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "50%",
    padding: "20px",
    margin: "20px",
    borderRadius: "20px !important",
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
  },
  topicRow: {
    width: "100%",
  },
  topicDoubleHeading: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: "bold !important",
    marginBottom: "10px",
  },
  topicDoubleBody: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    width: "100%",
    margin: "20px 0",
  },
  button: {
    background: "#0c1572 !important",
    color: "white !important",
  },
}));

export default Appbar;
