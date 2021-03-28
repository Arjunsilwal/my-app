import logo from './logo.svg';
import './App.css';
import About from "./components/About";

function fullName(arjun){
return (arjun.firstName + ' ' + arjun.lastName).toUpperCase();
}

const arjun = {
  firstName: "Arjun",
  lastName: "Silwal"
}


function App() {
  return (
    <div className="App">
       <h2 className= "App-name">{fullName(arjun)}</h2>
       <h2>"A Code Enthusiast"</h2>
       <About />

    </div>
  );
}

export default App;
