export default(state={data:[]}, action) => {
    switch(action.type){
        case 'GET_ABOUT':
            return {data:action.payload};
        case 'POST_ABOUT':   
            
            return {...state,data:[...state.data,action?.payload[0]]};
        case 'UPDATE_ABOUT':
            
            return {...state,data:state.data.map((d)=>((d._id===action?.payload[0]?._id)?(action?.payload[0]):(d)))};
        case 'DELETE_ABOUT':
           
            return {...state,data:state.data.filter((e)=>e?._id!==action.payload)};

        default:
            return state;
    }
  };