import generatehash from "../../helpers/hash";
import { loginActions, logoutActions, orderActions } from "../actionTypes";
import Cookie from "js-cookie";
import generateTenRandomIds from "../../helpers/randomId";

export const loginActionImp = (user) => {
  return (dispatch) => {
    dispatch({ type: loginActions.LOGIN_REQUEST });

    const userData = JSON.parse(Cookie.get("user"));

    if (user.email === userData.email && user.password === userData.password) {
      let hash = generatehash(user.email, user.password);

      dispatch({ type: loginActions.LOGIN_SUCCESS, payload: hash });

      localStorage.setItem("hashValue", hash);
    } else {
      dispatch({ type: loginActions.LOGIN_FALIURE });
    }
  };
};

export const logoutActionImp = () => {
  return (dispatch) => {
    dispatch({ type: logoutActions.LOGOUT_REQUEST });
  };
};

export const addOrderActionImp = (order, edit) => {
  if (edit) {
    return (dispatch) => {
      const orderFormat = {
        orderId: order.id,
        customerName: order.name,
        customerPhoneNumber: order.number,
        customerAddress: order.address,
        deliveryCost: order.cost,
        status: order.status,
        updateOrder: order.updateOrder,
      };

      dispatch({ type: orderActions.EDIT_ORDER, payload: orderFormat });
    };
  } else {
    return (dispatch) => {
      const orderFormat = {
        orderId: generateTenRandomIds(),
        customerName: order.name,
        customerPhoneNumber: order.number,
        customerAddress: order.address,
        deliveryCost: order.cost,
        status: order.status,
        updateOrder: order.updateOrder,
      };

      dispatch({ type: orderActions.ADD_ORDER, payload: orderFormat });
    };
  }
};
