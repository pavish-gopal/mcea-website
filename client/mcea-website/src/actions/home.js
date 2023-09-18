import * as api from '../api/index.js';

export const get_home=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetch_home();
        
        dispatch({type:"GET_HOME",payload:data});
    }
    catch(error){
        console.log(error);
    }
}
export const post_home=(form_data)=>async(dispatch)=>{
    try{
        const {data}=await api.post_home(form_data);
        
        dispatch({type:"POST_HOME",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

