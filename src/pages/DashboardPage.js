import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

const topMembers = [
  { name: "codechef", income: "$214" },
  { name: "codechef", income: "$214" },
  { name: "codechef", income: "$214" },
  { name: "codechef", income: "$214" },
  { name: "codechef", income: "$214" },
];

const bottomMembers = [
  { name: "codechef", income: "$214" },
  { name: "codechef", income: "$214" },
  { name: "codechef", income: "$214" },
  { name: "codechef", income: "$214" },
  { name: "codechef", income: "$214" },
];

const DashBoardPage = () => {
  // const [topMembers, setTopMembers] = useState([])
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h5">Welcome to Dashboard Page!</Typography>
      <Grid direction="row" container spacing={3} mt={1}>
        <Grid item xs={6} lg={4}>
          <Card
            elevation={8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
              p: 3,
              borderRadius: 4,
              bgcolor: theme.palette.primary.light,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography variant="h4">Income</Typography>
            <Typography variant="h3" fontWeight={700}>
              8724$
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Card
            elevation={8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
              p: 3,
              borderRadius: 4,
              bgcolor: theme.palette.error.light,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography variant="h4">Expense</Typography>
            <Typography variant="h3" fontWeight={700}>
              1234$
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Card
            elevation={8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
              p: 3,
              borderRadius: 4,
              bgcolor: theme.palette.success.light,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography variant="h4">Total</Typography>
            <Typography variant="h3" fontWeight={700}>
              7564$
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} lg={8}>
          <Card
            elevation={8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
              p: 3,
              borderRadius: 4,
              bgcolor: theme.palette.error.light,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography variant="h5">Current incomes by teams</Typography>
            
          </Card>
        </Grid>
        <Grid item xs={3} lg={2}>
          <Card
            elevation={8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
              p: 3,
              borderRadius: 4,
              bgcolor: theme.palette.success.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography variant="h5">Top 5</Typography>
            <Stack>
              {topMembers.map((member, index) => (
                <Stack direction="row" spacing={3} key={`top-member-${index}`}>
                  <Typography variant="p" fontWeight={700}>
                    {member.name}
                  </Typography>
                  <Typography variant="p" fontWeight={700}>
                    {member.income}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={3} lg={2}>
          <Card
            elevation={8}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
              p: 3,
              borderRadius: 4,
              bgcolor: theme.palette.warning.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography variant="h5">Bottom 5</Typography>
            <Stack>
              {bottomMembers.map((member, index) => (
                <Stack direction="row" spacing={3} key={`bottom-member-${index}`}>
                  <Typography variant="p" fontWeight={700}>
                    {member.name}
                  </Typography>
                  <Typography variant="p" fontWeight={700}>
                    {member.income}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoardPage;
