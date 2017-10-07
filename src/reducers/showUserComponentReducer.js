import * as types from '../actions/actionTypes'
//This reducer handles Visiblity of user Component
const istate={
    showUserComponent:null,
    }

export default function(state=istate,action)
{
        switch(action.type)
            {

                case types.SHOW_USER_COMPONENT:
                                console.log("Inside Reducer showUserComponent");
                                return Object.assign({}, state, {showUserComponent:true})
                                    break;
            case types.DONT_SHOW_USER_COMPONENT:
                                    console.log("Inside Reducer DONT_SHOW_USER_COMPONENT");
                                    return Object.assign({}, state, {showUserComponent:false})
                                    break;

        default: return state
   }

}
