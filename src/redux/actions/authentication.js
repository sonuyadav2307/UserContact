import * as type from "../type";

export function authenticateUsers(users){
    return{
        type: type.AUTHENTICATE_USER,
        payload: users
    }
}
export function logout() {
  return {
    type: type.LOGOUT,
  };
}