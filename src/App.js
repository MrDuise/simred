import React from 'react';
import Post from './components/Post/Post';


import './App.css';
import Votes from './components/Votes-Side-Bar/Votes';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Home />
      
    </div>
  );
}

export default App;
