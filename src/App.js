import logo from './poker-full-svgrepo-com.svg'
import ace from './Aceofspades.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className='header'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>The best poker players here.</p>
          <a className='link' href='https://discord.gg/avUUxXMv' target='_blank'>DISCORD</a>
        </header>
        <main className='main'>
          <div className='ace'>
            <img  className='card' src={ace}></img>
          </div>
          <div className='king'>
            <img className='card' src={ace}></img>
          </div>
          <div className='card1'>
            <img className='card' src={ace}></img>
          </div>
          <div className='card2'>
            <img className='card' src={ace}></img>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
