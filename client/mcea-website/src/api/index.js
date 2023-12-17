import axios from 'axios';

// const URL='http://localhost:5000/';

const URL=process.env.REACT_APP_API_KEY;

const API=axios.create({baseURL:URL})
//interceptor
API.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(localStorage.getItem('profile'))
    {
        let token=JSON.parse(localStorage.getItem('profile')).token;
        
        config.headers.authorization=`Bearer ${token}`;
        
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

//home
export const fetch_home=()=>API.get(`${URL}`);
export const post_home=(data)=>API.post(`${URL}`,data);

//contacts
export const fetch_contacts=()=>API.get(`${URL}contacts`);
export const post_contacts=(data)=>API.post(`${URL}contacts`,data);

//about
export const fetch_about=()=>API.get(`${URL}about`);
export const post_about=(data)=>API.post(`${URL}about`,data);
export const update_about=(id,data)=>API.put(`${URL}about/${id}`,data);
export const delete_about=(id)=>API.delete(`${URL}about/${id}`);
//events
export const fetch_events=()=>API.get(`${URL}events`);
export const post_events=(data)=>API.post(`${URL}events`,data);
export const update_events=(id,data)=>API.put(`${URL}events/${id}`,data);
export const delete_events=(id)=>API.delete(`${URL}events/${id}`);
//history
export const fetch_history=()=>API.get(`${URL}history`);
export const post_history=(data)=>API.post(`${URL}history`,data);
export const update_history=(id,data)=>API.put(`${URL}history/${id}`,data);
export const delete_history=(id)=>API.delete(`${URL}history/${id}`);

//user
export const login_api=(username,password)=>API.get(`${URL}auth/${username}/${password}`);
export const signup_api=(data)=>API.post(`${URL}auth`,data);