import { useState } from 'react'
import { Link } from 'react-router-dom'
//import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../config'



const LoginDetails = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser = () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const body = {
        email,
        password,
      }

      // url to make login api call
      const url = `${URL}/users/login`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Welcome  '+ result['data'].firstName )

          // get the data sent by server
          const { userId, firstName, role } = result['data']

          // persist the logged in user's information for future use
          sessionStorage['userId'] = userId
          sessionStorage['firstName'] = firstName
          
          sessionStorage['role'] = role
          // sessionStorage['loginStatus'] = 1

          
          if(role=='customer')
          {
          navigate("/")
          }
          if(role=='admin')
          {
            navigate("/adminmenuupdatedelete")
          }
          if(role=='co_admin')
          {
            navigate("/coadmin")
            
          }
          if(role=='delivery_person')
          {
            navigate("/deliveryperson")
          }
          

          // navigate('/Session')
        } else {
          toast.error('Invalid user name or password')
        }
      })
    }
  }

  return (
    <div>
      Login

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              />
            </div>
            <div>dont have account <a href='/Register' >signUp</a></div>

            <div>
              <button onClick={signinUser} className="btn btn-primary">
                Signin
              </button>
            </div>
            
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default LoginDetails

