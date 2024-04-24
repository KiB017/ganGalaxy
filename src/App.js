import './App.css';
import Exhibition from './components/Exhibition';

function App() {
  return (
    <div className='App'>
      <div className = 'header-container'>
        <img 
          className = 'ganGalaxy-logo'
          src = {require('./images/ganGalaxy_logo.webp')} 
          alt = ''
        />
        <br/>
        <p className = 'header-text'>The universe in your hands</p>
      </div>

      <div className = "welcome-container">
        <img 
          className = 'welcome-background'
          src = {require('./images/galaxy-background.webp')}
          alt = ''
        />
        <img
          src = {require('./images/ganGalaxy-entrance.webp')}
          className = 'welcome-container-entrance'
          alt = 'ganGalaxy Museam entrance'
        />
        <p className="welcome-text">Welcome to the world of astronomy</p>
      </div>

      <div className = 'mission-container'>
        <p className = 'mission-title'>
          Our mission
        </p>
        <p className = 'mission-text'>
          Our mission is to spread astronomical knowledge and encourage curiosity about space.
        </p>
      </div>

      <div className = 'exhibition-container'>
        <h2 className = 'exhibition-title'>
          Enjoy our wonderful exhibition
        </h2>

        <div className = 'exhibition-galery'>
          <Exhibition 
            imgNum = '1'
          />
          <Exhibition 
            imgNum = '2'
          />
          <Exhibition 
            imgNum = '3'
          />
          <Exhibition 
            imgNum = '4'
          />
          <Exhibition 
            imgNum = '5'
          />
          <Exhibition 
            imgNum = '6'
          />
        </div>
      </div>
    </div>
  );
}

export default App;