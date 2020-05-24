
// this is the normal way where we return and object
// export const createProject = (project) =>{
//     return {
//         type : 'ADD_PROJECT',
//         project : project
//     }
// }


// when we use thunk we return a fucntion
export const createProject = (project) =>{
    return {
        type : 'ADD_PROJECT',
        project : project
    }
}