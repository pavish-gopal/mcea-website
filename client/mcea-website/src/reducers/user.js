export default(state={data:[]}, action) => {
    switch(action.type){
        case 'LOGIN':
            localStorage.setItem('profile',JSON.stringify(action.payload.data));
            return {data:action.payload};
        case 'SIGNUP':
            
            localStorage.setItem('profile',JSON.stringify(action.payload.data));
            
            return {data:action.payload};
        default:
            return state;
    }
  };