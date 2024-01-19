import React from 'react'
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className='container'>
      <div className='top'>
        <div className='left'>
          <div className='sidebar'>
            <img src={logo} className="App-logo" alt="logo" />
            <h5>Home</h5>
            <h5>Search</h5>    
          </div>
          <div className='library'>
            <div className='heading'><h5>Your Library</h5></div>
            <div className='first-playlist'>First playlist</div>
            <div className='podcast'>Podcast</div>
            <div className='footer'></div>
          </div>
        </div>
        <div className='right'>
          <div className='header'></div>
          <div className='playlists'></div>
          <div className='footer'></div>          
        </div>
      </div>
      <div className='down'></div>
    </div>
  )
}

export default App

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default App;*/
