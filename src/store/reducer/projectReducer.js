// 2. create a reducer

// state is a javascript object
const initState ={
    //4.initialise the state
  projects : [
      {id:'1',title:'find me redux',content :' redux concepts'},
      {id:'2',title:'find me react-redux',content :' react-redux concepts'},
      {id:'3',title:'find me redux-thunk',content :' redux-thunk concepts'},
      {id:'4',title:'find me redux-saga',content :' redux-saga concepts'}
  ]
}
const projectReducer = (state = initState,action) =>{
    return state
}

export default projectReducer;