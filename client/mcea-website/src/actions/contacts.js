import * as api from '../api/index.js';

export const get_contacts=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetch_contacts();
        
        dispatch({type:"GET_CONTACTS",payload:data});
    }
    catch(error){
        console.log(error);
    }
}
export const post_contacts=(form_data)=>async(dispatch)=>{
    try{
        const {data}=await api.post_contacts(form_data);
        
        dispatch({type:"POST_CONTACTS",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

