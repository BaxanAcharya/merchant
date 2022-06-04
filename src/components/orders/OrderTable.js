import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderFrom from "./OrderFrom";

const OrderTable = () => {
  const { orders } = useSelector((state) => state.orderReducers);

  const [open, setOpen] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const [editId, setEditId] = useState(null);

  const handleClickOpen = (edit, id) => {
    setOpen(true);
    if (edit) {
      setEditId(id);
    }
    setIsEdit(edit);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <div style={{ display: "flex" }}>
        <div></div>
        <div style={{ flex: 1 }}></div>
        <div>
          <Button
            color="secondary"
            onClick={() => handleClickOpen(false, null)}
            variant="outlined"
            style={{ textTransform: "none" }}
          >
            Add Order
          </Button>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Customer Name</TableCell>
              <TableCell align="right">Customer Phone Number</TableCell>
              <TableCell align="right">Customer Address</TableCell>
              <TableCell align="right">Delivery Cost (Rs)</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Updated Order</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row.orderId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.orderId}
                </TableCell>
                <TableCell align="right">{row.customerName}</TableCell>
                <TableCell align="right">{row.customerPhoneNumber}</TableCell>
                <TableCell align="right">{row.customerAddress}</TableCell>
                <TableCell align="right">{row.deliveryCost}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">
                  {row.updateOrder === true ? "Yes" : "No"}
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleClickOpen(true, row.orderId)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {isEdit ? "Edit the Order" : "Add New Order"}
        </DialogTitle>
        <DialogContent>
          <OrderFrom
            handleClose={handleClose}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            editId={editId}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {/* Dialog end */}
    </Container>
  );
};

export default OrderTable;
