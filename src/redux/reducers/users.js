import * as type from '../type';

const initialState = {
    user:[],
    loading:false,
    error: null,
}


export default function users(state = initialState, action){
    switch(action.type){
        
        case type.GET_USERS_REQUESTED:
      
            return{
                ...state,
                loading:true,
            }
            case type.GET_USERS_SUCCESS:
                console.log('main success data',action.users);
                return{
                    ...state,
                    loading:false,
                    users:action.users
                }
            case type.GET_USERS_FAILED:
                return{
                    ...state,
                    loading:false,
                    error:action.message,
                    
                } 
            case type.ADD_USERS:
                console.log('add user called');
                return{
                   ...state,
                   users:[action.payload,...state.users]
                }  
            case type.DELETE_USERS:
                console.log("delete user called",action.payload); 
                console.log("original state", state);        
                return{
                    ...state,
                    users: state.users.filter(user => user.id != action.payload)
                }
            default:
                return state;
    }
}