import React from 'react'
import { Alert, Version } from '@mono/core'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Alert>
        This is alert
      </Alert>
      <Version />
    </div>
  );
}

export default App;
