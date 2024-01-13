import './App.css';
import './Components/Hello';
import './Components/welcome';
import './Components/Hello';
import './Components/secondPage';
import Steve from "./Components/secondPage";
import Welcome from "./Components/welcome";
import FirstPage from "./Components/WelcomeClassComponent";

function App() {
  return (
    <div className="App">
       <Welcome name='Madaraka Shoes' />
        <Steve name="Breeo" ><b>I Love You </b></Steve>
        <FirstPage name="Class Componnet">
            I think we should take a brief break now <br/>
            and continue later.
            <br/>byeee
        </FirstPage>
    </div>
  );
}

export default App;
