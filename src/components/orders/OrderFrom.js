import {
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrderActionImp } from "../../redux/actionCreators";
import { orderState } from "../../utils/formik/fromState";

const getInitialValues = (edit, id, orders) => {
  if (!edit && !id) {
    return orderState;
  } else {
    const order = orders.find((order) => order.orderId === id);
    const initial = {
      id: order.orderId,
      name: order.customerName,
      number: order.customerPhoneNumber,
      address: order.customerAddress,
      cost: order.deliveryCost,
      status: order.status,
      updateOrder: order.updateOrder,
    };
    return initial;
  }
};

const OrderFrom = ({ handleClose, isEdit, setIsEdit, editId }) => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orderReducers);

  const formik = useFormik({
    initialValues: getInitialValues(isEdit, editId, orders),
    onSubmit: (values, { setValues }) => {
      dispatch(addOrderActionImp(values, isEdit));
      setValues(orderState);
      handleClose();
      setIsEdit(false);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
          onSubmit={formik.handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                required
                fullWidth
                id="name"
                label="Customer Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                type="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                id="number"
                label="Phone Number"
                name="number"
                autoComplete="phone-number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                label="Customer Address"
                name="address"
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="cost"
                label="Delivery Cost"
                value={formik.values.cost}
                onChange={formik.handleChange}
                type="number"
                id="cost"
                autoComplete="cost-delivery"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="status"
                label="Delivery Status"
                type="text"
                value={formik.values.status}
                onChange={formik.handleChange}
                id="status"
                autoComplete="status-delivery"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Update Order
                </FormLabel>
                <RadioGroup
                  row
                  value={formik.values.updateOrder}
                  onChange={formik.handleChange}
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="updateOrder"
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            disabled={
              !formik.values.name ||
              !formik.values.number ||
              !formik.values.address ||
              !formik.values.status
            }
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isEdit ? "Edit Order" : "Add Order"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderFrom;
