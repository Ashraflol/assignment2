
import './firebase';
import { getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {Link,useNavigate} from 'react-router-dom';


function Signin(){
    let history = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const notify = (text) => toast.error(text, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  
      function handleChangeUser(event) {
        console.log('username : ',event.target.value);
        setUsername(event.target.value)
      }
  
      function handleChangePassword(event) {
        console.log('password : ',event.target.value);
        setPassword(event.target.value)
      }
  
      function handleSubmit(){
        signInWithEmailAndPassword(auth, username, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            history("/Loggedin");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            notify(errorMessage)
          });
      }
  

    return(
    <div className="container">
        <div className="row pt-md-5 mt-5 justify-content-end">
          <div className="col-md-4">
            <div className="border-red p-5">
              <h3 className="pb-2">ADMIN LOGIN</h3>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChangeUser}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChangePassword}/>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                <small id="emailHelp" className="float-end form-text text-muted">Forget Your Password?</small>
              </div>
              <button type="submit" className="btn w-100 btn-danger-submit" onClick={handleSubmit}>SIGN IN</button>
                <Link to="/Signup">
                    <button type="" className="mt-3 btn w-100 btn-danger-submit btn-primary" >INSTEAD SIGN UP</button>
                </Link>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
        <ToastContainer />
    </div>
    )
}

export default Signin;