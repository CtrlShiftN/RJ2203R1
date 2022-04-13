import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App container d-flex justify-content-center pt-4">
      <div className='w-25'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ictR3HlTrzWiTGrnhbm8dLxVKnfMz-0YkQ&usqp=CAU'></img>
        <h1>Login form</h1>
        <form>
          <div className="form-outline mb-4">
            <input type="email" id="form1Example1" className="form-control" />
            <label className="form-label" htmlFor="form1Example1">Email address</label>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="form1Example2" className="form-control" />
            <label className="form-label" htmlFor="form1Example2">Password</label>
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default App;
