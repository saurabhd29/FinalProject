
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";
import { URL } from '../config'

import { useEffect } from "react";


const ProfileDetails = () => {

  const {userId}= sessionStorage;
  const [curUser, setCurUser]= useState([])
  


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  // const [role, setRole] = useState("customer");
  const navigate= useNavigate();


  useEffect(()=>{


  if(userId != undefined)
  {
  axios.get(`http://localhost:8080/users/${userId}`).then((response)=>{
  //axios.get(`http://localhost:8080/users/${1}`).then((response)=>{
  setCurUser(response.data.data);
  setFirstName(response.data.data.firstName);
  setLastName(response.data.data.lastName);
  setEmail(response.data.data.email);
  setMobileNo(response.data.data.mobileNo);
  setAddress(response.data.data.address);

  })
}
  else
  {
    
    toast.warning("Login First")
    
    //navigate("/Login")
  }

  


  },[]);


    const EditUser= () =>{
    if(firstName.length==0){ 
    toast.warning('please enter first name')
    }else if(lastName.length==0){
      toast.warning('please enter last Name ')}
    else if(email.length==0){
    toast.warning('please enter email')
    }
    else if(mobileNo.length==0){
    toast.warning('please enter Mobile Number ')
    }else if(address.length==0){
    toast.warning('please enter address')
    }else{ 
      const body = 
      {
        userId,
        firstName,
        lastName,
        email,
        mobileNo,
        address,
      }
            

          const url= `${URL}/users/update`
          axios.put(url, body).then((response) =>
          {
            

            const result= response.data
            console.log(result)
            if(result['status']== 'success')
            {
              toast.success('Successfully Updated')
              navigate('/HomePage')
            }
            else
            {
              toast.error(result['error'])
            }


          })
  
        }   

  }




  const logoutUser= ()=> {

    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('firstName');
    sessionStorage.removeItem('role');
    toast.success("Logged out Successfully")
    navigate("/")
    
    }




  return (
    <div>
      

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
          
          <h1 className="title">Edit Profile</h1>
              
              
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  first Name
                </label>
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  Value={curUser.firstName}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Last Name
                </label>
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  Value={curUser.lastName}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Email
                </label>
                <input 
                  onChange={(e)=>{
                     setEmail(e.target.value) 
                  }}
                  type="email"
                  className="form-control"
                  Value={curUser.email}
                />
              </div>

            


              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Mobile Number
                </label>
                <input
                onChange={(e)=>{
                  setMobileNo(e.target.value)
                }}
                type="number"
                className="form-control"
                Value={curUser.mobileNo}
                />
              </div> 


              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Address
                </label>
                <input
                onChange={(e)=>{
                   setAddress(e.target.value)
                }}
                type="text"
                className="form-control"
                Value={curUser.address}
                />
              </div> 

              <div className="mb-3">
                <div>
                  Already Have an Account?
                  <a href data-toggle="modal" data-target="#login-modal">Login Here</a>
                        
                          
                </div>
                <button onClick={EditUser} className="btn btn-primary">
                  Update Profile
                </button>

              </div> 





          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};



export default ProfileDetails
