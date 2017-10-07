import * as types from '../actions/actionTypes'
//This reducer  listen for request when data from 3rd api is fetched by Redux-Saga
const data=
{
    data:null
}

export default function(state=data,action)
{
   switch(action.type)
   {

    case types.USERS_DATA_LIST_FETCHED:
                             console.log("Inside Reducer  USERSDATALISTFETCHED");
                              return Object.assign({}, state, {data:action.data})
                              break;
    default: return state
   }


}
