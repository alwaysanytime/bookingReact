import * as React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewTimelineOutlinedIcon from '@mui/icons-material/ViewTimelineOutlined';

import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

import AssessmentIcon from '@mui/icons-material/Assessment';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CarRentalIcon from '@mui/icons-material/CarRental';

import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import TimelapseOutlinedIcon from '@mui/icons-material/TimelapseOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import CommuteOutlinedIcon from '@mui/icons-material/CommuteOutlined';

import WorkspacesIcon from '@mui/icons-material/Workspaces';
import WidgetsIcon from '@mui/icons-material/Widgets';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

import MuiDrawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import ExplicitIcon from "@mui/icons-material/Explicit";
import AdjustIcon from "@mui/icons-material/Adjust";

import List from "@mui/material/List";
import { styled, useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const drawerWidth = 250;

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
  width: `calc(${theme.spacing(7)} - 8px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} - 8px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  height: 40,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  boxShadow: "rgba(47, 43, 61, 0.14) 0px 2px 6px 0px",
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

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const [openList, setOpenList] = React.useState({ dashboard: false, product: false, configuration: false, calendar: false, customer: false, maketing: false });
  const navigator = useNavigate();
  const theme = useTheme();

const listItemIconStyle = {
  minWidth: 40, 
  fontSize: 25,
  
};
const listSubItemIconStyle = {
  ml: 1,
  minWidth: 35
};
const listSubIcon = {
  fontSize: 20
}

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={() => setOpen(!open)} sx={{ mr: 0.5 }}>
          <AdjustIcon
            sx={{ color: theme.palette.primary.main, fontSize: 20 }}
          />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ width: "100%", bgcolor: "background.paper" }} component="nav">
        
        <ListItemButton
          onClick={() =>
            setOpenList({ ...openList, dashboard: !openList.dashboard })
          }
        >
          <ListItemIcon sx={ listItemIconStyle }>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {openList.dashboard ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList.dashboard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={() => navigator("/dashboard/overview")}>
              <ListItemIcon sx={listSubItemIconStyle} >
                <ViewTimelineOutlinedIcon sx={listSubIcon}/>
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
            <ListItemButton onClick={() => navigator("/dashboard/manifest")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <FormatListBulletedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Manifest" />
            </ListItemButton>
            <Divider />
          </List>
        </Collapse>

        <ListItemButton
          onClick={() =>
            setOpenList({ ...openList, product: !openList.product })
          }
        >
          <ListItemIcon sx={ listItemIconStyle }>
            <CarRentalIcon />
          </ListItemIcon>
          <ListItemText primary="Rental Products" />
          {openList.product ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList.product} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={() => navigator("/product/create")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <AddCardOutlinedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Create/Edit Rental" />
            </ListItemButton>

            <ListItemButton onClick={() => navigator("/product/equipment")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <CommuteOutlinedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Equipment" />
            </ListItemButton>

            <ListItemButton onClick={() => navigator("/product/season")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <PublishedWithChangesOutlinedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Change season" />
            </ListItemButton>

            <ListItemButton onClick={() => navigator("/product/duration")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <TimelapseOutlinedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Duration" />
            </ListItemButton>

            <ListItemButton onClick={() => navigator("/product/prices")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <AttachMoneyOutlinedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Prices" />
            </ListItemButton>

            <ListItemButton onClick={() => navigator("/product/availability")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <EventAvailableOutlinedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Availability" />
            </ListItemButton>

            <ListItemButton onClick={() => navigator("/product/questions")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <QuestionAnswerOutlinedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Questions" />
            </ListItemButton>

            <ListItemButton onClick={() => navigator("/product/advanced")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <SettingsSuggestOutlinedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Advanced" />
            </ListItemButton>
            <Divider />
          </List>
        </Collapse>
        
        <ListItemButton
          onClick={() =>
            setOpenList({ ...openList, configuration: !openList.configuration })
          }
        >
          <ListItemIcon sx={ listItemIconStyle }>
            <WorkspacesIcon />
          </ListItemIcon>
          <ListItemText primary="Configuration" />
          {openList.configuration ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList.configuration} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={() => navigator("/configuration/widget")}>
              <ListItemIcon sx={listSubItemIconStyle}> 
                <WidgetsIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Wedget Builder" />
            </ListItemButton>

            <ListItemButton onClick={() => navigator("/configuration/email")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <EmailOutlinedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Email Templates" />
            </ListItemButton>

            <ListItemButton onClick={() => navigator("/configuration/tickets")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <AirplaneTicketOutlinedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItemButton>

            <ListItemButton onClick={() => navigator("/configuration/assets")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <AddBoxOutlinedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Assets" />
            </ListItemButton>

            <ListItemButton onClick={() => navigator("/configuration/taxes")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <ReceiptLongOutlinedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Taxes" />
            </ListItemButton>
            
            <Divider />
          </List>
        </Collapse>
        

        <ListItemButton
          onClick={() =>
            setOpenList({ ...openList, calendar: !openList.calendar })
          }
        >
          <ListItemIcon sx={ listItemIconStyle }>
            <CalendarMonthIcon />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
          {openList.calendar ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList.calendar} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={() => navigator("/calendar/rentalbookings")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <BookmarkAddIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Rental Bookings" />
            </ListItemButton>
            <ListItemButton onClick={() => navigator("/calendar/rentalavailability")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <EventAvailableIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Rental Availability" />
            </ListItemButton>
            <Divider />
          </List>
        </Collapse>


        <ListItemButton
          onClick={() =>
            setOpenList({ ...openList, customer: !openList.customer })
          }
        >
          <ListItemIcon sx={ listItemIconStyle }>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary="Customer" />
          {openList.customer ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList.customer} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={() => navigator("/customer/search")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <SearchIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItemButton>
            <ListItemButton onClick={() => navigator("/customer/booking")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <BookmarkAddedIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Booking" />
            </ListItemButton>
            <Divider />
          </List>
        </Collapse>

        <ListItemButton onClick={() => navigator("/report")}>
          <ListItemIcon sx={ listItemIconStyle }>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>

        <ListItemButton
          onClick={() =>
            setOpenList({ ...openList, maketing: !openList.maketing })
          }
        >
        <ListItemIcon sx={ listItemIconStyle }>
            <LocalGroceryStoreIcon />
          </ListItemIcon>
          <ListItemText primary="Maketing" />
          {openList.maketing ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList.maketing} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton onClick={() => navigator("/marketing/reviews")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <ReviewsIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Reviews" />
            </ListItemButton>
            <ListItemButton onClick={() => navigator("/marketing/carts")}>
              <ListItemIcon sx={listSubItemIconStyle}>
                <ShoppingBagIcon sx={listSubIcon} />
              </ListItemIcon>
              <ListItemText primary="Abandoned Carts" />
            </ListItemButton>
            <Divider />
          </List>
        </Collapse>


      </List>
    </Drawer>
  );
};

export default Sidebar;
