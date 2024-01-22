import React from 'react'
import './App.css';
import logo from './logo.svg';
import icon from './icon.svg';

function App() {
  return (
    <div className='container'>
      <div className='top'>

        <div className='left'>

          <div className='sidebar'>
            <img src={logo} className="App-logo" alt="logo" />
            <h4><span class="material-symbols-rounded">home</span>Home</h4>
            <h4><span class="material-symbols-rounded">search</span>Search</h4>    
          </div>
          
          <div className='library'>
            <div className='heading'>
              <h4><span class="material-symbols-rounded">library_add_check</span>Your Library</h4>
              <span class="material-symbols-rounded">add</span>
            </div>            

            <div className='first-playlist'>
              <h4>Create your first playlist</h4>
              <p>It is easy, we'll help you</p>
              <button className='button'>Create playlist</button>
            </div>

            <div className='podcast'>
              <h4>Let's find some podcasts to follow</h4>
              <p>We'll keep you updated on new episodes</p>
              <button className='button'>Browse podcasts</button>
            </div>

            <div className='footer'>
              <p className='ft'>Legal &nbsp; Privacy Center &nbsp; Privacy Policy &nbsp; Cookies &nbsp; About Ads 
                <br/>Accessibility
              </p>
              <a href="#" className='cookies'>Cookies</a>
              <div className='lang'>
                <span class="material-symbols-rounded">language</span>
                <h5>English</h5>
              </div>
            </div>

          </div>
        </div>


        <div className='right'>
          <div className='header'>
            <div className='fb'>
              <span class="material-symbols-rounded">arrow_back_ios</span>
              <span class="material-symbols-rounded">arrow_forward_ios</span>
            </div>
            <div className='sign'>
              <button className='sign-up'>Sign up</button>
              <button className='log-in'>Log in</button>
            </div>
          </div>

          <div className='playlists'>
            <div className='heading'>
              <h3>Spotify playlists</h3>
              <p>Show all</p>
            </div>

            <div className='playlist-card'>
              <div className='bg'>
                <img src={icon} className="App-logo" alt="logo" />
                <p>lofi beats</p>
              </div>
              <h5>lofi beats</h5>
              <p>chill beats, lofi vibes, new tracks every week...</p>
            </div>

            <div className='playlist-card'>
              <div className='bg'>
                <img src={icon} className="App-logo" alt="logo" />
                <p>lofi beats</p>
              </div>
              <h5>lofi beats</h5>
              <p>chill beats, lofi vibes, new tracks every week...</p>
            </div>

            <div className='playlist-card'>
              <div className='bg'>
                <img src={icon} className="App-logo" alt="logo" />
                <p>lofi beats</p>
              </div>
              <h5>lofi beats</h5>
              <p>chill beats, lofi vibes, new tracks every week...</p>
            </div>

            <div className='playlist-card'>
              <div className='bg'>
                <img src={icon} className="App-logo" alt="logo" />
                <p>lofi beats</p>
              </div>
              <h5>lofi beats</h5>
              <p>chill beats, lofi vibes, new tracks every week...</p>
            </div>

            <div className='playlist-card'>
              <div className='bg'>
                <img src={icon} className="App-logo" alt="logo" />
                <p>lofi beats</p>
              </div>
              <h5>lofi beats</h5>
              <p>chill beats, lofi vibes, new tracks every week...</p>
            </div>

          </div>

          <div className='footer'>
            <div className='top-footer'>
              <div className='text'>
                <ul>
                  <li>Company</li>
                  <li>About</li>
                  <li>Jobs</li>
                  <li>For the Record</li>
                </ul>
                <ul>
                  <li>Communities</li>
                  <li>For Artists</li>
                  <li>Developers</li>
                  <li>Advertising</li>
                  <li>Investors</li>
                  <li>Vendors</li>
                </ul>
                <ul>
                  <li>Useful Links</li>
                  <li>Support</li>
                  <li>Free Mobile App</li>
                </ul>
              </div>

              <div className='socials'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>              
              </div>
            </div>

            <span></span>

            <p className='copyright'>&copy; 2024 Spotify AB</p>
          </div>          
        </div>
      </div>


      <div className='down'>
        <div className='text'>
          <h5>Preview of Spotify</h5>
          <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed</p>
        </div>
        <button className='button'>Sign up free</button> 
      </div>
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
