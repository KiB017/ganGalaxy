import './App.css';
import ganGalaxyEntrance from './images/ganGalaxy-entrance.webp';
import ganGalaxyLogo from './images/ganGalaxy_logo.webp';

function App() {
  return (
    <div className="App">
      <header>
        <img 
          className='ganGalaxy-logo'
          src={ganGalaxyLogo} 
          alt=''
        />
        <p className='header-text'>The universe in your hands</p>
      </header>

      <div className = "welcome-container">
        <img
          src={ganGalaxyEntrance}
          className = "welcome-container-entrance"
          alt = "ganGalaxy Museam entrance"
        />
        <p className="welcome-text">Welcome to the world of astronomy</p>
      </div>
      
    </div>
  );
}

export default App;