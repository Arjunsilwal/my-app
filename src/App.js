import './App.css';
import { BrowserRouter as Router,Switch, Route  } from "react-router-dom";
import Info from "./components/Info"
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/info" component={Info} />
          <Route path="/contacts" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/form" component={Form} />
        </Switch>
      </Router>
        </div>
  );
}

export default App;
