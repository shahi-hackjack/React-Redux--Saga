import { put, call } from 'redux-saga/effects'
import {loadUsersDataApi} from '../api/loadUsersData';
import * as types from '../actions/actionTypes'

//This calls Firebase API and feteches the result and dispatch the action to reducer
export function * loadUsersData()
{
        console.log("Inside load users data")

        let apiResponse=yield call(loadUsersDataApi)

        if(apiResponse)
                {
                  console.log("recieved response from loadusersdata",apiResponse)
                  yield put({type:types.USERS_DATA_LIST_FETCHED,data:apiResponse})

                }


}
