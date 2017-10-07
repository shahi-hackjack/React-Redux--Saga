import { fork } from 'redux-saga/effects'
import {loadUsersDataWatcher} from './watchers';
//This Forks the watchers //It is master Saga
export default function* startForman()
 {
    console.log("sagas.js START SAGA")
            yield [
                  fork(loadUsersDataWatcher),
                     ]
}
