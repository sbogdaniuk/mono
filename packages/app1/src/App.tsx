import React, { useState } from 'react';
import { awesomeFn } from "@mono/core";
import { Button } from "@mono/core/dist/components/Button";
import { Version } from "@mono/core/dist/components/Version";
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
        <div className="button-holder">
          <Button onClick={onClick} rounded>{message || 'Click to see magic'}</Button>
        </div>
      </header>
      <Version />
    </div>
  );
}

export default App;
