import * as api from '../api/index';


export const get_events=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetch_events();
        
        dispatch({type:"GET_EVENTS",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const post_events=(form_data)=>async(dispatch)=>{
    try{
        
        const {data}=await api.post_events(form_data);
        
        dispatch({type:"POST_EVENTS",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const update_events=(id,form_data)=>async(dispatch)=>{
    try{
        // console.log(id,form_data);
        const {data}=await api.update_events(id,form_data);
        console.log(data);
        dispatch({type:"UPDATE_EVENTS",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const delete_events=(id)=>async(dispatch)=>{
    try{
        
        const data_id=await api.delete_events(id);
        
        dispatch({type:"DELETE_EVENTS",payload:data_id.data});
    }
    catch(error){
        console.log(error);
    }
}