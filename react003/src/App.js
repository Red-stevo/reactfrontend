import './App.css';
import './StateObjects/Message'
import './StateObjects/Count'
import './StateObjects/Destructuring'
import './StateObjects/ClassPropsDestructuring'
import Destructuring from "./StateObjects/Destructuring";
import ClassPropsDestructuring from "./StateObjects/ClassPropsDestructuring";

function App() {
  return (
    <div className="App">
        <Destructuring fName="Brenda" sName="Mukami" lName="Mwongera" />
        <ClassPropsDestructuring fName="Stephen" sName="Muiru" lName="Coder" />
    </div>
  );
}

export default App;
