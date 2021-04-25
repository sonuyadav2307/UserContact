import * as type from "../type";

const initialState = {
login:false,
erro: ""
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case type.AUTHENTICATE_USER:
      console.log("authentication reducer called",action.payload);
        return {
          ...state,
          login:!state.login
        };
    default:
      return state;
  }
}
