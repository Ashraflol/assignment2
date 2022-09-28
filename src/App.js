import './App.css';
import './signin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './signin';
import Signup from './signup';
import Loggedin from './loggedin';
import NoPage from './nopage';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // createUserWithEmailAndPassword(auth, 'email@gmail.com', 'password123')
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Signin />}/>
          <Route path="SignUp" element={<Signup />} />
          <Route path="Loggedin" element={<Loggedin />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
