import * as React from "react";
import { Box, Typography, useTheme, Button, Card, CardContent, CardHeader, Tab, Divider, Grid } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { useState } from "react";
import { Stack } from "@mui/material";
import { CardActions } from "@mui/material";

const Dashboard = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();
  const [tabValue, setTabValue] = React.useState('1');

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (

    <Grid container>
      <Grid item xs={5}>
        <Box display="flex" flexDirection="column" gap={4}>
          <Typography variant="h4">Welcome to Booking247.com !</Typography>
          <Card>
            <CardContent>
              <TabContext value={tabValue}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                <Tab label="Tickets" value="tickets" />
                <Tab label="Revenue" value="revenue" />
                <Tab label="Resellers" value="resellers" />
              </TabList>
            </Box>
              <TabPanel value="tickets">
              <Stack direction="column" spacing={2} mb={3}>
                <Typography variant="h6">TICKETS</Typography>
                <Stack direction="row" spacing={4}>
                  <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
                    <Typography variant="h6">0</Typography>
                    <Typography variant="p">Today</Typography>
                  </Stack>
                  <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
                    <Typography variant="h6">0</Typography>
                    <Typography variant="p">Yesterday</Typography>
                  </Stack>
                  <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
                    <Typography variant="h6">0</Typography>
                    <Typography variant="p">Last 7 days</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column" spacing={2}>
                <Typography variant="=h6">BOOKINGS</Typography>
                <Stack direction="row" spacing={4}>
                  <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
                    <Typography variant="h6">0</Typography>
                    <Typography variant="p">Today</Typography>
                  </Stack>
                  <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
                    <Typography variant="h6">0</Typography>
                    <Typography variant="p">Yesterday</Typography>
                  </Stack>
                  <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
                    <Typography variant="h6">0</Typography>
                    <Typography variant="p">Last 7 days</Typography>
                  </Stack>
                </Stack>
              </Stack>
              </TabPanel>
              <TabPanel value="revenue">Revenue</TabPanel>
              <TabPanel value="resellers">Resellers</TabPanel>
              </TabContext>
            </CardContent>
            <CardActions>
              <Button variant="text">Refresh</Button>
            </CardActions>
          </Card>
          <Box maxWidth={500}>
            <Typography variant="h6">New Bookings</Typography>
            <Divider />
            {
              bookings.map(e => (
                <Stack direction="column" spacing={1}>
                  <Typography variant="h6" color="primary">{e.name}</Typography>
                  <Typography variant="h6" >{e.desctiption}</Typography>
                  <Typography variant="h6">{e.date}</Typography>
                  <Divider />
                </Stack>
              ))
            }
          </Box>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Box display="flex" justifyContent="center" width="100%" pt={10}>
          <Typography variant="h3">Manifest</Typography>
        </Box>
      </Grid>
    </Grid>

  );
};

export default Dashboard;



const bookings = [
  {
    name: "test",
    date: "2000--123-203",
    desctiption: "test",

  },
  {
    name: "test",
    date: "2000--123-203",
    desctiption: "test",

  },
  {
    name: "test",
    date: "2000--123-203",
    desctiption: "test",

  },
]