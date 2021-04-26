import * as type from "../type";

const initialState = {
  login: false,
  erro: "",
  user: {},
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case type.AUTHENTICATE_USER:
      return {
        ...state,
        login: true,
        user: action.payload,
      };
    case type.LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
