import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Menu, MenuItem, Stack, alpha } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import ExplicitIcon from "@mui/icons-material/Explicit";

import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import GroupTwoToneIcon from '@mui/icons-material/GroupTwoTone';
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import LibraryBooksTwoToneIcon from '@mui/icons-material/LibraryBooksTwoTone';

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShareIcon from "@mui/icons-material/Share";
import SchoolIcon from "@mui/icons-material/School";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logout } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { store } from "../redux/store";
import { LOGOUT } from "../redux/actionTypes";
import { useSnackbar } from "notistack";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function PrivateLayout({ children }) {
  const navigator = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openRentalList, setOpenRentalList] = React.useState({ Rental: false });
  const [openDashList, setOpenDashList] = React.useState({ Dash: false });
  const [openConfigList, setOpenConfigList] = React.useState({ Config: false });
  const [openCalendarList, setOpenCalendarList] = React.useState({ Calendar: false });
  const [openCustomerList, setOpenCustomerList] = React.useState({ Customer: false });
  const [openMarketList, setOpenMarketList] = React.useState({ Market: false });
  const { isLoggedin } = useSelector((state) => state.auth);
  const { enqueueSnackbar } = useSnackbar();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    store.dispatch({ type: LOGOUT });
    enqueueSnackbar({ variant: "default", message: "You have logged out." });
  };

  if (!isLoggedin) return <Navigate to={`/login`} />;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Management System
            </Typography>
          </Stack>
          <IconButton onClick={handleOpenMenu}>
            <Avatar
              alt="Remy Sharp"
              sx={{ bgcolor: theme.palette.warning.main }}
              src="/static/images/avatar/1.jpg"
            />
          </IconButton>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu} disableRipple>
              <AccountCircleIcon />
              Profile
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleLogout} disableRipple>
              <Logout />
              Logout
            </MenuItem>
          </StyledMenu>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
        >
          {/* <ListItemButton onClick={() => navigator("/dashboard")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton> */}

          <ListItemButton
            onClick={() =>
              setOpenDashList({ ...openDashList, Dash: !openDashList.Dash })
            }>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            {openDashList.Dash ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openDashList.Dash} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => navigator("/dashboard")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/code")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Manifest" />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>

          <ListItemButton
            onClick={() =>
              setOpenRentalList({ ...openRentalList, Rental: !openRentalList.Rental })
            }>
            <ListItemIcon>
              <CarRentalOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Rental Products" />
            {openRentalList.Rental ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openRentalList.Rental} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => navigator("/skill-up/code")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Create/Edit rental" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/english")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Equipment" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/english")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Change season" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/english")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Duration" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/english")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Prices" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/english")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Availability" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/english")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Questions" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/english")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Advanced" />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>

          <ListItemButton
            onClick={() =>
              setOpenConfigList({ ...openConfigList, Config: !openConfigList.Config })
            }>
            <ListItemIcon>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Configuration" />
            {openConfigList.Config ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openConfigList.Config} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => navigator("/dashboard")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Widget builder" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/code")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Email templates" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/code")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Tickets" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/code")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Assets" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/code")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Taxes" />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>
          
          <ListItemButton
            onClick={() =>
              setOpenCalendarList({ ...openCalendarList, Calendar: !openCalendarList.Calendar })
            }>
            <ListItemIcon>
              <CalendarMonthTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
            {openCalendarList.Calendar ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCalendarList.Calendar} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => navigator("/dashboard")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Rental Bookings" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/code")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Rental Availability" />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>
          
          <ListItemButton
            onClick={() =>
              setOpenCustomerList({ ...openCustomerList, Customer: !openCustomerList.Customer })
            }>
            <ListItemIcon>
              <GroupTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
            {openCustomerList.Customer ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCustomerList.Customer} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => navigator("/dashboard")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/code")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Booking" />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>

          <ListItemButton
            onClick={() =>
              setOpenMarketList({ ...openMarketList, Market: !openMarketList.Market })
            }>
            <ListItemIcon>
              <LocalGroceryStoreTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Marketing" />
            {openMarketList.Market ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openMarketList.Market} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton onClick={() => navigator("/dashboard")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Reviews" />
              </ListItemButton>
              <ListItemButton onClick={() => navigator("/skill-up/code")}>
                <ListItemIcon>
                  <FiberManualRecordOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Aandoned carts" />
              </ListItemButton>
              <Divider />
            </List>
          </Collapse>


          <ListItemButton onClick={() => navigator("/expense")}>
            <ListItemIcon>
              <LibraryBooksTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItemButton>
          
        </List>
      </Drawer>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          // bgcolor: "#f3f3f3",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <DrawerHeader />
        <Box component="main">{children}</Box>
      </Box>
    </Box>
  );
}
