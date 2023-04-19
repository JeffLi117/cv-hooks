import './App.css';
import ExampleCV from './components/ExampleCV';
import React, { useState } from 'react';

function App() {

  const [qShowing, setQShowing] = useState(false);  
  function questionShowToggle() {
    setQShowing(!qShowing)
  }

  if (qShowing) {
    return (
      <div className="App backgroundlay">
          <ExampleCV 
            questionShowToggle={questionShowToggle}
            qShowing={qShowing} 
          />
      </div>
    );
  } else {
    return (
      <div className="App">
        <ExampleCV 
          questionShowToggle={questionShowToggle}
          qShowing={qShowing} 
        />
      </div>
    );
  }

  
}

export default App;
