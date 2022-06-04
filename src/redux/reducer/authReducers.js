import { loginActions, logoutActions } from "../actionTypes";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginActions.LOGIN_REQUEST:
      state = { ...state, isLoading: true, user: null, error: null };
      break;

    case loginActions.LOGIN_SUCCESS:
      state = {
        ...state,
        isLoading: false,
        user: {
          hash: action.payload,
          name: "Abc Name",
          description:
            " This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
        },
        error: null,
      };
      break;

    case loginActions.LOGIN_FALIURE:
      state = { ...state, isLoading: false, error: "Invalid Credentials" };
      break;

    case logoutActions.LOGOUT_REQUEST:
      state = { ...state, isLoading: false, user: null, error: null };
      break;

    default:
      state = {
        ...state,
      };
  }

  return state;
};

export default authReducer;
