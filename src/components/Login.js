import { useState } from "react";
import axios from "axios";
const Login=()=>{

    const[username, setUsername] = useState('');
    const[password, setPassword]=useState(''); 
    const[message, setMessage]=useState('');
    const userLogin=(e)=>{
        e.preventDefault();
        const Logindata={username, password}
        axios.post("http://localhost:90/customer/login", Logindata)
        // .then(result=>console.log(result))
        .then((result)=>{
            if(result.data.token){
                const token = result.data.token;
                //locally store 
                localStorage.setItem('token', token)
            }
            else{
                setMessage("Invalid login")
            }
            }
        )
        .catch();
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                        image
                        <p>{message}</p>
                </div>

                <div className="col-md-4">
                    <h2>LOGIN</h2>
                   
                    <form>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" onChange={(e)=>setUsername(e.target.value)}></input>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}></input>
                        </div>

                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" onClick={userLogin}></input>
                        </div>
                        
                    </form>

    
                </div>

                <div className="col-md-4">
                    blabla
                </div>
            </div>
        </div>
    )
}

export default Login;