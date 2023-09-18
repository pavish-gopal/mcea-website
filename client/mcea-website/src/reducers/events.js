export default(state={data:[]}, action) => {
    switch(action.type){
        case 'GET_EVENTS':
            return {data:action.payload};
        case 'POST_EVENTS':   
            
            return {...state,data:[...state.data,action?.payload[0]]};
        case 'UPDATE_EVENTS':
            
            return {...state,data:state.data.map((d)=>((d._id===action?.payload[0]?._id)?(action?.payload[0]):(d)))};
        case 'DELETE_EVENTS':
           
            return {...state,data:state.data.filter((e)=>e?._id!==action.payload)};
        default:
            return state;
    }
};