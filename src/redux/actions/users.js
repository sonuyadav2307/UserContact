import * as type from "../type";

export function getUsers(users){
    return{
        type: type.GET_USERS_REQUESTED,
        payload: users
    }
}
export function addUsers(users){
    return{
        type: type.ADD_USERS,
        payload: users
    }
}