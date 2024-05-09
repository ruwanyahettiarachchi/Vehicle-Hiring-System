import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './updateservice.css'

function UpdateService(){
    const { id } = useParams();
    const [updatediscount,setupdatediscount]=useState({
      username:"",
      address:"",
      contact:"",
      email:"",
      nic:"",
      date:"",
    })

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:8080/user/${id}`);
            const data = await response.json();
            console.log(data);
    
            if (data.success) {
                setupdatediscount(data.data);
            } else {
              console.error(data.message);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
    
        fetchUserData();
      }, []);



      const handleInputChange = (e) => {
        setupdatediscount({
          ...updatediscount,
          [e.target.name]: e.target.value,
        });
      };
      const handleUpdate = async () => {
        try {
          const response = await fetch(`http://localhost:8080/update`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: updatediscount._id,
              ...updatediscount,
            }),
          });
    
          const data = await response.json();
    
          if (data.success) {
            console.log('service updated successfully');
           alert("updated successfully");

          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error updating user:', error);
        }
      };


    return(
        <div className='service-update'>


    <lable>User Name:</lable>
    <input type="text" id="tyusernamepe" name="username" onChange={handleInputChange} value={updatediscount?.username }/><br></br>
    <lable>Address:</lable>
    <input type="text" id="address" name="address" onChange={handleInputChange} value={updatediscount?.address }/><br></br>
    <lable>Contact No:</lable>
    <input type="text" id="contact" name="contact" onChange={handleInputChange} value={updatediscount?.contact }/><br></br>
    <lable>Email:</lable>
    <input type="text" id="email" name="email" onChange={handleInputChange} value={updatediscount?.email }/><br></br>
    <lable>Nic:</lable>
    <input type="text" id="nic" name="nic" onChange={handleInputChange} value={updatediscount?.nic }/><br></br>
    <lable>Date:</lable>
    <input type="date" id="date" name="date" onChange={handleInputChange} value={updatediscount?.date }/><br></br>
  



  
    <button onClick={handleUpdate}>Update Hiring</button><br></br> <br></br> 

 
        </div>
    )
}
export default UpdateService;