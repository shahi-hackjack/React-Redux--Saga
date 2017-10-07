import * as types from './actionTypes';

export function showUserComponentFunc( )
{ //Trigger Show Mount User  Component
  console.log("Inside Action showUserComponentFunction ")
  return {
   type:types.SHOW_USER_COMPONENT
           }
}

export function dontShowUserComponentFunc( )
{//Trigger Unmount Of User Component
  console.log("Inside Action dontShowUserComponentFunction ")
  return {
   type:types.DONT_SHOW_USER_COMPONENT
           }
}


export function loadUsersDataFunc( )
{ //Api call to Redux Saga
  console.log("Inside Action loadUsersDataFunc ")
  return {
   type:types.LOAD_USERS_DATA
           }
}
