import React,{useEffect,useState} from 'react'
import Officebearer from './Officebearer/Officebearer.jsx';
import { useSelector,useDispatch } from 'react-redux';
import {get_about,post_about,update_about,delete_about} from '../../actions/about.js';

export default function About() {
  const dispatch=useDispatch();
  const {data}=useSelector((state)=>state.about);
  
  const [edit,setEdit]=useState(false);
  const [editAbout,setEditAbout]=useState(false);
  const [deleteAbout,setDeleteAbout]=useState(false);
  const [Id,setId]=useState(null);
  const [Form,setForm]=useState({
    name:"",
    photo:"",
    posting:"",
    studyingYear:""

} );

useEffect(()=>{
  if(localStorage.getItem('profile')){
    setEdit(true);
  }
  else{
    setEdit(false);
  }
  },[localStorage.getItem('profile')]);

  useEffect(()=>{
    dispatch(get_about());
  },[])

  const handleChange=(e)=>{
    setForm({...Form,[e.target.name]:e.target.value});
    
  }
  const handleSubmit=(e)=>{
      e.preventDefault();
      if(editAbout){
        dispatch(update_about(Id,Form));
      }
      else{
      dispatch(post_about(Form));
      }
      //clearing all like id edit state etc
      setId(null);
      setEditAbout(false);
      setDeleteAbout(false);
      setForm({
        name:"",
        photo:"",
        posting:"",
        studyingYear:""
    
    } );
      }
      const Edit=(id)=>{
        setId(id);
        setEditAbout(true);
        setDeleteAbout(false);
        let temp=data.filter(e=>e?._id===id);
        if(temp.length>0){
          setForm({
            name:temp[0]?.name,
            photo:temp[0]?.photo,
            posting:temp[0]?.posting,
            studyingYear:temp[0]?.studyingYear
        
        });
        }
        
      }
      const Delete=(id)=>{
        setId(id);
        setDeleteAbout(true);
        dispatch(delete_about(id))
        setEditAbout(false);
      }
  return (
    <div>
      
      <div>
        {
          data.map((e)=><Officebearer data={e} options={edit} Edit={Edit} Delete={Delete}></Officebearer>)
        } 
      </div>
      {(edit)&&<div>
          <form onSubmit={handleSubmit}>
            <input name="name" onChange={handleChange} value={Form.name} placeholder="Enter Name"></input>
            <input name="photo"  type="file" onChange={handleChange} value={Form.photo} ></input>
            <input name="posting" onChange={handleChange} value={Form.posting} placeholder="Enter posting"></input>
            <input name="studyingYear" onChange={handleChange} value={Form.studyingYear} placeholder="Enter Studying year"></input>
            
            <button type="submit">submit</button>
          </form>     
        </div>}
    </div>
  )
}
