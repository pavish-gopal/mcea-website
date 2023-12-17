
export default(state={data:[]}, action) => {
    
    switch(action.type){
        case 'LOGIN':
            localStorage.setItem('profile',JSON.stringify(action.payload.data));
            alert('logged in');
            
            return {data:action.payload};
        case 'SIGNUP':
            alert('siggned up');
            localStorage.setItem('profile',JSON.stringify(action.payload.data));
            
            return {data:action.payload};
        case 'LOGOUT':
            alert('logged out');
            localStorage.clear();
            alert('logged out');
            return state;
        default:
            return state;
    }
  };