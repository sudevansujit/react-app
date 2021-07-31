import logo from './Assets/logo.gif'
import './App.css';
import Title from './Title';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       Hello World
       <img src={logo} />
       <Title  />
      </header>
    </div>
  );
}

export default App;
