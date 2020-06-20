import React, {useState} from 'react';
import piaic from './piaic.png';
import './App.css';
import Parent from './Parent';
import counterContext from './counterContext';



function App() {
  let countState = useState(0)

  return (
    <counterContext.Provider value={countState}>
      <div>
      <header className="App-header">
        <img src={piaic} className="App-piaic" alt="piaic" /></header>
        <Parent />
      </div>
    </counterContext.Provider>
  );

}

export default App;
