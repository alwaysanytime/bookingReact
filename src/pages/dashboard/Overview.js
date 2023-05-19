import * as React from "react";
import { Box, Typography, useTheme, Button, Card, CardContent, CardHeader, Tab, Divider, Grid, IconButton } from "@mui/material";


import { useState } from "react";
import { Stack } from "@mui/material";
import { CardActions } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const infos = [
  {
    headerTitle: "Today",
    fontColor: "#2196f3",
    type: "today",
    title: "5",
    description: "Yesterday's overdue:",
    descCount: 2,
    bg: "rgb(74 163 233 / 10%)",
  },
  {
    headerTitle: "Yesterday",
    fontColor: "#f44336",
    type: "yesterday",
    title: "4",
    description: "Yesterday's overdue:",
    descCount: 2,
    bg: "rgb(244 67 54 / 10%)",
  },
  {
    headerTitle: "Last 7 days",
    fontColor: "#4caf50",
    type: "average",
    title: "0",
    description: "Yesterday's overdue:",
    descCount: 2,
    bg: "rgb(76 175 80 / 10%)",
  },
  {
    headerTitle: "Target",
    fontColor: "#ffc107",
    type: "target",
    title: "20",
    description: "Yesterday's overdue:",
    descCount: 2,
    bg: "rgb(255 193 7 / 10%)",
  },
];

const Overview = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();
  const [tabValue, setTabValue] = React.useState('1');

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            gap: 1,
          }}
          >
          <Typography variant="h4">Overview</Typography>
        </Box>
            <Grid container>
              <Grid container direction="row" spacing={2}>
                {infos.map((info, index) => {
                  return (
                    <Grid item xs={6} sm={6} md={3} key={index}>
                      <Card sx={{ bgcolor: info.bg }}>
                        <CardHeader
                          title={
                            <Typography variant="h5">
                              {info.headerTitle}
                            </Typography>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                        ></CardHeader>
                        <CardContent sx={{ padding: 0 }}>
                          <Box sx={{ textAlign: "center" }}>
                            <Typography
                              sx={{
                                color: info.fontColor,
                                fontSize: "2.5rem",
                                fontWeight: "bold",
                                overflow: "hidden",
                              }}
                            >
                              {/* {topData[info.type]?.toLocaleString()} */}
                            </Typography>
                            <Typography
                              sx={{
                                color: info.fontColor,
                                fontWeight: "medium",
                                fontSize: "1.3rem",
                              }}
                            >
                              {info.title}
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid>
                <Box display="flex" flexDirection="column" gap={4}>
                  
                  
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
            </Grid>
      </CardContent>
    </Card>
  );
};

export default Overview;



const bookings = [
  {
    name: "Ski",
    date: "5-13-2023",
    desctiption: "test",

  },
  {
    name: "Car",
    date: "5-13-2023",
    desctiption: "test",

  },
  {
    name: "Train",
    date: "5-12-2023",
    desctiption: "test",

  },
]