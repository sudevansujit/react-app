import logo from './Assets/logo.gif'
import './App.css';
import Title from './Title';
import MachineryList from './MachineryList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       Hello World
       <img src={logo} />
       <Title  />
       <MachineryList />
      </header>
    </div>
  );
}

export default App;
