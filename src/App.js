import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row pt-md-5 mt-5 justify-content-end">
          <div className="col-md-4">
            <div className="border-red p-5">
              <h3 className="pb-2">ADMIN LOGIN</h3>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Remember me</label>
                <small id="emailHelp" className="float-end form-text text-muted">Forget Your Password?</small>
              </div>
              <button type="submit" className="btn w-100 btn-danger-submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
