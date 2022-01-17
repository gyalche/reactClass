
import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';
 const Register=()=> {
    
    // render() {
        const [username, setUsername] = useState('');
        const [phoneNumber, setPhoneNumber]=useState('');
        const [email, setEmail]=useState('');
        const [password, setPassword]=useState('');
        const [message, setMessage]=useState('');

        const registerCustomer=(e)=>{
            e.preventDefault();//prevents the page from beign refresh
            const data={username, phoneNumber, email, password}
            // console.log(data);
            axios.post("http://localhost:90/customer/register", data)
            // .then(result=>console.log(result.data))
            .then((result)=>{
                if(result.data.status === 1){
                    //console.log("Everything is fine")
                    setMessage("Customer Registerd sucessfull!!")
                }
            })
            .catch((err)=>{
                setMessage(err);
            })
            ; 
        }
        return (
            
          <div className='container'>
              <div className='row'>
                  <div className='col-md-4'>
                  </div>
                  <div className='col-md-4'>
                      <h1 class="rHead">Register Here</h1>
                      <p className="registerMessage">{message}</p>
                    <form>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="Text" className='form-control' onChange={(e)=>setUsername(e.target.value)}></input>
                        </div>

                        <div class="form-group">
                            <label>phone number</label>
                            <input type="number " className='form-control' onChange={(e)=>setPhoneNumber(e.target.value)}></input>
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <input type="Text" className='form-control' onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)}></input>
                        </div>

                        <div>
                        <button class="btn btn-outline-success" type="submit" onClick={registerCustomer}>submit</button>
                        </div>
                       
                    </form>
                  </div>
                  <div className='col-md-4'>
                    two
                  </div>
              </div>
          </div>
        )
    // }
};
export default Register;