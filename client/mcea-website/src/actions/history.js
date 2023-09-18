import * as api from '../api/index';


export const get_history=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetch_history();
        
        dispatch({type:"GET_HISTORY",payload:data});
    }
    catch(error){
        console.log(error);
    }
}
export const post_history=(form_data)=>async(dispatch)=>{
    try{
        
        const {data}=await api.post_history(form_data);
        
        dispatch({type:"POST_HISTORY",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const update_history=(id,form_data)=>async(dispatch)=>{
    try{
        // console.log(id,form_data);
        const {data}=await api.update_history(id,form_data);
        console.log(data);
        dispatch({type:"UPDATE_HISTORY",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const delete_history=(id)=>async(dispatch)=>{
    try{
        
        const data_id=await api.delete_history(id);
        
        dispatch({type:"DELETE_HISTORY",payload:data_id.data});
    }
    catch(error){
        console.log(error);
    }
}