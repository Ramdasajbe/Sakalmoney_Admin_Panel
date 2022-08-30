import React from "react";
import { useNavigate } from "react-router-dom";
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
import { Outlet } from "react-router-dom";
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
function Appbar(props) {
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
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}

Appbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Appbar;
