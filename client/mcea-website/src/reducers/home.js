export default(state={data:[]}, action) => {
    switch(action.type){
        case 'GET_HOME':
            
            return {data:action.payload};
        case 'POST_HOME':
            
            return {...state,data:action.payload};
        default:
            return state;
    }
  };