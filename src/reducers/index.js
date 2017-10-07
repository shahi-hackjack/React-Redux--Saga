import { combineReducers } from 'redux'
import showUserComponent from './showUserComponentReducer'
import usersList from './usersListReducer'

    const rootReducer=combineReducers({
                showUserComponent,//For User Component Visiblity
                usersList  // Fetched Data from Firebase
    });

export default rootReducer;
