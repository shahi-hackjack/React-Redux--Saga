import superagent from 'superagent';
//Api End Point
export function* loadUsersDataApi(){

    console.log("Inside Load Users Data Api")

    let response=yield superagent.get('https://sstv-task.firebaseio.com/users.json')

return response.body
}
