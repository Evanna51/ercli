import React from "react";
import logo from "../../public/logo.svg";
import "./app.less";
// import { Provider } from 'react-redux';

function App() {
  return (
    // <Provider store={this.props.store}>
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
    // </Provider>
  );
}

export default App;
