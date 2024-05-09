import { useState } from "react";
import axios from "axios";
import './add service.css'
import logo from './1679562502396.jpg'


function AddService(){
    const [order,setorder]=useState({
        username:"",
        address:"",
        contact:"",
        email:"",
        nic:"",
        date:"",
    
       
    })

    const handleonchange=(e)=>{
        const {value,name}=e.target
        setorder((preve)=>{
               return{
                ...preve,
                [name]:value
               }
          })
       
        
    }
    
    const handlesubmit=async(e)=>{
     
       e.preventDefault()
       const data=await axios.post("http://localhost:8080/create",order)
          console.log(data)
          alert("your details added now!")
         
     
    }


    return(
        <div className="add-service">
    <img className ="imgadd" src={logo} alt="Logo" width="30%" height="50%"></img>
<h2>Add Vehicle Hiring</h2>

    <form onSubmit={handlesubmit}>
    <lable>User Name:</lable>
    <input type="text" id="username" name="username" onChange={handleonchange}/><br></br>
    <lable>Address:</lable>
    <input type="text" id="address" name="address" onChange={handleonchange}/><br></br>
    <lable>Contact No:</lable>
    <input type="text" id="contact" name="contact" onChange={handleonchange}/><br></br> 
    <lable>Email:</lable>
    <input type="text" id="email" name="email" onChange={handleonchange}/><br></br>
    <lable>Nic:</lable>
    <input type="text" id="nic" name="nic" onChange={handleonchange}/><br></br>
    <lable>Date:</lable>
    <input type="date" id="date" name="date" onChange={handleonchange}/><br></br>
     <br></br> <br></br> <br></br> 
  


    <button>Hiring Add</button>
    </form><br></br> 
   
        </div>
    )
}
export default AddService;