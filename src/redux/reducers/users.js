import * as type from "../type";

const initialState = {
  users: [],
  loading: false,
  error: null,
  editForm: {},
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_USERS_SUCCESS:
      console.log(action.users, "this is main");
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.ADD_USERS:
      return {
        ...state,
        users: [action.payload, ...state.users],
        loading: false,
      };
    case type.DELETE_USERS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case type.EDIT_USERS:
      console.log("aaaat", action.payload);
      console.log("this is cool state",state);
      return {
        ...state,
        users: [
          ...state.users.map((user) =>
            action.payload.id == user.id
              ? {...user, ...action.payload }
              : user
          ),
        ],
      };
    case type.GET_USER_BY_ID:
      let arr = state.users.filter((user) => user.id == action.payload);
      console.log(arr, state.users, "editForm");
      return {
        ...state,
        editForm: arr[0],
      };
    default:
      return state;
  }
}
