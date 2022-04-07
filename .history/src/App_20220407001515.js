import logo from './Enhanced Apes Logo.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <a
          className="App-link"
          href="http://localhost:3000/mint"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter Now
        </a>
      </header>
    </div>
  );
}

export default App;
