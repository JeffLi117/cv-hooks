import './App.css';
import ExampleCV from './components/ExampleCV';
import React, { useState } from 'react';
import Question from './components/Question';

function App() {

  const [qShowing, setQShowing] = useState(false);  
  function questionShowToggle() {
    setQShowing(!qShowing)
  }
  
  if (qShowing) {
    return (
      <div className="App">
          <Question 
            qShowing={qShowing}
            questionShowToggle={questionShowToggle}
          />
          <ExampleCV backgroundlay="backgroundlay"
          />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Question 
          qShowing={qShowing}
          questionShowToggle={questionShowToggle}
        />
        <ExampleCV 
        />
      </div>
    );
  }

  
}

export default App;
