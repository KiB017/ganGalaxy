import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img 
          className='ganGalaxy-logo'
          src={require('./images/ganGalaxy_logo.webp')} 
          alt=''
        />
        <p className='header-text'>The universe in your hands</p>
      </header>

      <div className = "welcome-container">
        <img 
          className = 'welcome-background'
          src = {require('./images/galaxy-background.webp')}
        />
        <img
          src={require('./images/ganGalaxy-entrance.webp')}
          className = "welcome-container-entrance"
          alt = "ganGalaxy Museam entrance"
        />
        <p className="welcome-text">Welcome to the world of astronomy</p>
      </div>

      
      
    </div>
  );
}

export default App;