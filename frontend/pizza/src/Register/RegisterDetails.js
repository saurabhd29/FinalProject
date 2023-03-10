// import axion from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";
import { URL } from '../config'



const RegisterDetails = () => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("customer");

  const navigate= useNavigate();

    const registerUser= () =>{
    if(firstName.length==0){ 
    toast.warning('please enter first name')
    }else if(lastName.length==0){
      toast.warning('please enter last Name ')}
    else if(email.length==0){
    toast.warning('please enter email')
    }else if(password.length==0){
    toast.warning('please enter Password')
    }else if(confirmPassword.length==0){
    toast.warning('please enter Confirm password')
    }else if(mobileNo.length==0){
    toast.warning('please enter Mobile Number ')
    }else if(address.length==0){
    toast.warning('please enter address')
    }else if(email.length==0){
    toast.warning('please enter email')
    }else{ 
      const body = {
        firstName,
        lastName,
        email,
        password,
        mobileNo,
        address,
        role,
                  }
            

          const url= `${URL}/users/register`
          axios.post(url, body).then((response) =>
          {
            
            
            const result= response.data
            console.log(result)
            if(result['status']== 'success')
            {
              toast.success('Successfully registered new user')
              navigate('/login')
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
          
          <h1 className="title">Register</h1>
              
              
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
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  password
                </label>
                <input
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
                />
              </div>    

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Confirm Password
                </label>
                <input
                onChange={(e)=>{
                  setConfirmPassword(e.target.value)
                }}
                type="password"
                className="form-control"
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
                type="text"
                className="form-control"
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
                />
              </div> 

              <div className="mb-3">
                <div>
                  Already Have an Account? <Link to="/login">Login Here</Link>
                </div>
                <button onClick={registerUser} className="btn btn-primary">
                  Register
                </button>

              </div> 





          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default RegisterDetails;
