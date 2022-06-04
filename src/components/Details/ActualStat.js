import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const rows = [
  {
    order: 1002312,
    payment: 675786567,
    recentorder: 5,
  },
];

const ActualStat = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Total Orders</TableCell>
            <TableCell align="right">Total Payment (Rs)</TableCell>
            <TableCell align="right">Recent Orders</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.order}
              </TableCell>
              <TableCell align="right">{row.payment}</TableCell>
              <TableCell align="right">{row.recentorder}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ActualStat;
