import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Box, Typography } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  footer: {
    position: "sticky",
    bottom: "0",
    top: "auto !important",
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.footer}>
        <Box sx={{ width: { xs: 500, sm: 786, md: 1080, xl: "100%" } }}>
          <div
            style={{
              backgroundColor: "#020202",
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Typography
              variant="body-2"
              component="div"
              style={{
                color: "white",
                textAlign: "center",
                marginTop: 8,
                marginBottom: 8,
              }}
            >
              Powered By{" "}
              <a
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: 8,
                  marginBottom: 8,
                }}
                // href="https://www.foxberry.in/"
                // target="_blank"
              >
                {" "}
                Foxberry Technologies{" "}
              </a>{" "}
              &copy; {new Date().getFullYear()}
            </Typography>
          </div>
        </Box>
      </AppBar>
    </div>
  );
}
