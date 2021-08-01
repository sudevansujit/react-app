import { HashRouter as Router, Route } from 'react-router-dom'
import logo from './Assets/logo.gif'
import './App.css';
import Title from './Title';
import MachineryList from './MachineryList';
import About from './About'
import MachineryDetails from './MachineryDetails'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
       Hello World
       <img src={logo} />
       <Title  />
       <Route exact path="/" component={MachineryList}/>
       <Route path="/about" component={About} />
       <Route path="/details/:id" component={MachineryDetails} />

       {/* <MachineryList /> */}
      </header>
    </div>
    </Router>
  );
}

export default App;
