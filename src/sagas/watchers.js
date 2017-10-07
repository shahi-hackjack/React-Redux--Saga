import { takeLatest,takeEvery } from 'redux-saga/effects'
import {loadUsersData} from './loadUsersData'
import * as types from '../actions/actionTypes'

//This Saga Watchers for the actions
export function* loadUsersDataWatcher()
{
           console.log(" Inside load Users Data Watcher")
           yield takeLatest(types.LOAD_USERS_DATA ,loadUsersData)
}
