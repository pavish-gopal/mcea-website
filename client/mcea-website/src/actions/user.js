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
export const signup=(temp_data)=>async(dispatch)=>{
  
    try{
    const data =await api.signup_api(temp_data);
    console.log(data);
    dispatch({type:"SIGNUP",payload:data});
    }
    catch(error){
        if(error.response.status===404){
            alert("user already exits");
        }
        
        console.log(error);
        
    }

}