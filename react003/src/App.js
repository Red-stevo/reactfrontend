import logo from './logo.svg';
import './App.css';
import './StateObjects/Message'
import './StateObjects/Count'
import Message from "./StateObjects/Message";
import Count from "./StateObjects/Count";

function App() {
  return (
    <div className="App">
      <Message />
        <Count></Count>
    </div>
  );
}

export default App;
