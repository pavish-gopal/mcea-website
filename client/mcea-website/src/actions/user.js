import  * as api from '../api/index.js';

export const login=(username,password,navigate)=>async(dispatch)=>{
    
    try{
        
        const {data}=await api.login_api(username,password);
        
        dispatch({type:"LOGIN",payload:data});
        navigate('/');
        window.location.reload();
    }
    catch(error){
        console.log(error);
    }
}

export const logout=(navigate)=>async(dispatch)=>{
    try{

        dispatch({type:'LOGOUT'});
        navigate('/login');
        
    }
    catch(error){
        if(error.response.status===404){
            alert("user already exits");
        }
        
        console.log(error);
    }
}

export const signup=(temp_data,navigate)=>async(dispatch)=>{
  
    try{
    const data =await api.signup_api(temp_data);
    console.log(data);
    dispatch({type:"SIGNUP",payload:data});
    navigate('/');
    window.location.reload();
    }
    catch(error){
        if(error.response.status===404){
            alert("user already exits");
        }
        
        console.log(error);
        
    }

}