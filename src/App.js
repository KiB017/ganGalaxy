import './App.css';

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

      
      
    </div>
  );
}

export default App;