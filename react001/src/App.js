import './App.css';
import './Components/Hello'
import './Components/welcome';
import './Components/Hello'
import './Components/secondPage'
import Steve from "./Components/secondPage";
import Welcome from "./Components/welcome";

function App() {
  return (
    <div className="App">
       <Welcome name='Madaraka Shoes' />
        <Steve name="Breeo" ><b>I Love You </b></Steve>
    </div>
  );
}

export default App;
