import React from 'react';


import './App.css';
import Votes from './components/Votes-Side-Bar/Votes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Votes />
    </div>
  );
}

export default App;
