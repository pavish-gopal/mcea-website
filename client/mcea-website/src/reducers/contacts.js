export default(state={data:[]}, action) => {
    switch(action.type){
        case 'GET_CONTACTS':
            
            return {data:action.payload};
        case 'POST_CONTACTS':
            
            return {...state,data:action.payload};
        default:
            return state;
    }
  };