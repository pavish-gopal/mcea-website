import  * as api from '../api/index.js';

export const login=(username,password)=>async(dispatch)=>{
    try{
        const {data}=await api.login_api(username,password);
        
        dispatch({type:"LOGIN",payload:data});
    }
    catch(error){
        console.log(error);
    }
}