import React, { useEffect } from 'react'
import { version } from '@bs/core'
import { Button } from '@bs/core/components/Button'
// import logo from '@bs/core/logo.svg'
import './App.scss';

function App() {
  useEffect(() => {
    version()
  }, [])

  return (
    <div className="App">
      <Button className="app-button">
        asda
      </Button>
      {/*<img src={logo} alt="logo" />*/}
    </div>
  );
}

export default App;
