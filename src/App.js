import './App.css';
import Exhibition from './components/Exhibition';
import TicketForm from './components/TicketForm';

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
        <p className = "welcome-text">Welcome to the world of astronomy</p>
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

        <div className = 'fila'>
          <Exhibition 
            imgNum = '1'
          />
          <Exhibition 
            imgNum = '2'
          />
          <Exhibition 
            imgNum = '3'
          />
        </div>
        <div className = 'fila'>
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

      
      <p className = 'ticket-title'>You can buy a e-ticket</p>
      <p className = 'ticket-subtitle'>Avilable on monday to friday 9 A.M. to 9 P.M.</p>

      <div className = 'ticket-form-container'>
        <img 
          src = {require('./images/ticket.png')}
          className = 'ticket-img'
          alt = 'ticket'
        />

        <TicketForm />

      </div>

    </div>
  );
}

export default App;