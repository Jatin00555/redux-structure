import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./actions/index.ts";

function App() {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.authReducer.login);
  useEffect(() => {
    dispatch(login.request({}));
  }, []);

  console.log(loginData, "login");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
