import './firebase';
import { getAuth ,createUserWithEmailAndPassword} from "firebase/auth";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {Link,useNavigate} from 'react-router-dom';

function Signup(){
    let history = useNavigate();
    const [emailId, setemailId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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

      function handleChangeEmail(event) {
        console.log('Email : ',event.target.value);
        setemailId(event.target.value)
      }
      function handleChangeUser(event) {
        console.log('username : ',event.target.value);
        setUsername(event.target.value)
      }
      function handleChangePassword(event) {
        console.log('password : ',event.target.value);
        setPassword(event.target.value)
      }
      function handleChangePasswordConfirm(event) {
        console.log('confirm password : ',event.target.value);
        setConfirmPassword(event.target.value)
      }

  
      function handleSubmit(){
        if(username == ''){
          return notify('Username can\'t be Blank')
        }else if(password == confirmPassword){
          console.log('Password matched')
        }else{
          return notify('Password Doesnt match')
        }
        createUserWithEmailAndPassword(auth, emailId, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
            history("/Loggedin");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
            notify(errorMessage)
            // ..
          });
      }
    return(
    <div className="container">
        <div className="row pt-md-5 mt-5 justify-content-end">
          <div className="col-md-4">
            <div className="border-red p-5">
              <h3 className="pb-2">ADMIN SIGNUP</h3>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChangeEmail}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputusername1">User</label>
                <input type="text" className="form-control" id="exampleInputusername1" aria-describedby="usernameHelp" placeholder="Enter username" onChange={handleChangeUser}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={handleChangePassword}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" onChange={handleChangePasswordConfirm}/>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                <small id="emailHelp" className="float-end form-text text-muted">Forget Your Password?</small>
              </div>
              <button type="submit" className="btn w-100 btn-danger-submit btn-primary" onClick={handleSubmit}>SIGN UP</button>
              <Link to="/">
                  <button type="" className="mt-3 btn w-100 btn-danger-submit " >INSTEAD SIGN IN</button>
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

export default Signup;