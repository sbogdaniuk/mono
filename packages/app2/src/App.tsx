import React, { useState } from 'react';
import { awesomeFn } from "@mono/core";
import { Button } from "@mono/core/dist/components/Button";
import cold from "@mono/core/dist/images/cold.svg";
import logo from './logo.svg';
import './App.scss';

function App() {
  const [message, setMessage] = useState('')

  const onClick = async () => {
    setMessage(await awesomeFn(1234))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{awesomeFn(12345)}</div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="button-holder">
          <Button onClick={onClick}>{message || 'Click to see magic'}</Button>
          <img src={cold} alt="cold" />
        </div>
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
