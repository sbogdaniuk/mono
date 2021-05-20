import React from 'react'
import { Alert } from '@mono/core/dist/components/Alert'
import { Version } from '@mono/core/dist/components/Version'
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
