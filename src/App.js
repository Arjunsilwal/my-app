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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/contacts">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
      </Router>
        </div>
  );
}

export default App;
