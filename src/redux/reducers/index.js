import {combineReducers} from 'redux';
import users from './users';
import authentication from './authentication';

const rootReducer = combineReducers({
   users,
   authentication
});

export default rootReducer