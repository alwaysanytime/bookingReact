import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
//import { apis } from "../apis";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

//import { socket } from "../apis/socket";

const columns = [
  { field: "status", headerName: "Status" },
  {
    field: "booking",
    headerName: "Booking",
    type: "Object",
    valueFormatter: (params) => params.value.name,
  },
  {
    field: "productName",
    headerName: "Product Name",
    type: "Object",
    valueFormatter: (params) => params.value.name,
  },
  {
    field: "name",
    headerName: "Name",
    type: "Object",
    valueFormatter: (params) => params.value.name,
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    valueFormatter: (params) => `$ ${params.value}`,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    type: "Number",
  },
  {
    field: "payment",
    headerName: "Payment",
    type: "string",
  },
  {
    field: "startTime",
    headerName: "Start Time",
    type: "date",
    valueGetter: (params) => new Date(params.value),
  },
  {
    field: "returnTime",
    headerName: "Return Time",
    type: "date",
    valueGetter: (params) => new Date(params.value),
  },
  {
    field: "duration",
    headerName: "Duration",
    type: "date",
    valueGetter: (params) => new Date(params.value),
  },
];

const Manifest = () => {
  const [selectedRow, setSelectedRow] = React.useState(null);

  const [rows, setRows] = useState([]);
  
  return (
    <Box>
      
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
            <Typography variant="h4">Manifest</Typography>
            <Box gap={1} display="flex">
              <Button
                variant="outlined"
                sx={{ color: "primary" }}
                startIcon={<MessageOutlinedIcon />}
                // onClick={() => {
                //   reset();
                //   setOpenCreateDialog(true);
                // }}
              >
                Notify Guests
              </Button>
              
            </Box>
          </Box>
          <DataGrid
            sx={{ height: 700, width: "100%" }}
            rows={rows}
            columns={columns}
            getRowId={(params) => params._id}
            slots={{ toolbar: GridToolbar }}
            scrollbarSize={3}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            onRowClick={(params) => setSelectedRow(params.row)}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Manifest;
