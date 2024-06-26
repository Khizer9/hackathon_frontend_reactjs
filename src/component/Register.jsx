import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../constant';
import {  toast, ToastContainer } from 'react-toastify';


function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleRegister = async () => {
      try {
        const payload = {
          name: name,
          email: email,
          password: password
        }
        const response = await axios.post(`${BASE_URL}/user`, payload);
        console.log(response?.data, "response")
        toast.success(response?.data?.message)
      } catch (error) {
        console.log(error)
        toast.error(error.response.data?.message)
      }
    }

  return (
    <>
      <MDBContainer className="my-5 gradient-form">

        <MDBRow>

          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column ms-5">

              <div className="text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  style={{width: '185px'}} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">Register</h4>
              </div>

              <p>Please Enter your details</p>


              <MDBInput wrapperClass='mb-4' label='Name' value={name} onChange={(e) => setName(e.target.value)} id='form1' type='text' />
              <MDBInput wrapperClass='mb-4' label='Email address' value={email} onChange={(e) => setEmail(e.target.value)} id='form2' type='email' />
              <MDBInput wrapperClass='mb-4' label='Password' value={password} onChange={(e) => setPassword(e.target.value)} id='form3' type='password'/>



              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleRegister}>Register</MDBBtn>
                {/* <a className="text-muted" href="#!">Forgot password?</a> */}
              </div>

              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Already have an account?</p>
                <MDBBtn outline className='mx-2' color='danger' onClick={() => navigate('/')}>
                  Login
                </MDBBtn>
              </div>

            </div>

          </MDBCol>

          <MDBCol col='6' className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

            </div>

          </MDBCol>

        </MDBRow>

        </MDBContainer>
    </>

  );
}

export default Register;