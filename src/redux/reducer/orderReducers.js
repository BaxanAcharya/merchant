import generateTenRandomIds from "../../helpers/randomId";
import { orderActions } from "../actionTypes";

const initialState = {
  orders: [
    {
      orderId: generateTenRandomIds(),
      customerName: "Biplab Acharya",
      customerPhoneNumber: "87687678687",
      customerAddress: "Kolkata",
      deliveryCost: 313,
      status: "Delivered",
      updateOrder: false,
    },
    {
      orderId: generateTenRandomIds(),
      customerName: "Biplab Acharya",
      customerPhoneNumber: "87687678687",
      customerAddress: "Kolkata",
      deliveryCost: 313,
      status: "Delivered",
      updateOrder: false,
    },
    {
      orderId: generateTenRandomIds(),
      customerName: "Biplab Acharya",
      customerPhoneNumber: "87687678687",
      customerAddress: "Kolkata",
      deliveryCost: 313,
      status: "Delivered",
      updateOrder: false,
    },
  ],
};

const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case orderActions.ADD_ORDER:
      //set the action payload in the state
      state.orders.push(action.payload);
      break;

    case orderActions.EDIT_ORDER:
      //set the action payload in the state
      state.orders.forEach((order) => {
        if (order.orderId === action.payload.orderId) {
          order.customerName = action.payload.customerName;
          order.customerPhoneNumber = action.payload.customerPhoneNumber;
          order.customerAddress = action.payload.customerAddress;
          order.deliveryCost = action.payload.deliveryCost;
          order.status = action.payload.status;
          order.updateOrder = action.payload.updateOrder;
        }
      });
      break;
    default:
      state = { ...state };
  }

  return state;
};

export default orderReducers;
