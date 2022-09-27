import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './firebase';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import React, { useState } from 'react';

function App() {
  // createUserWithEmailAndPassword(auth, 'email@gmail.com', 'password123')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

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
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode,errorMessage)
        });
    }

  return (
    <div className="App">
      <div className="container">
        <div className="row pt-md-5 mt-5 justify-content-end">
          <div className="col-md-4">
            <div className="border-red p-5">
              <h3 className="pb-2">ADMIN LOGIN</h3>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChangeUser}/>
                 <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
              <button type="submit" className="btn w-100 btn-danger-submit" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
