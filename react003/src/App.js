import './App.css';
import './StateObjects/Message'
import './StateObjects/Count'
import './StateObjects/Destructuring'
import './StateObjects/ClassPropsDestructuring'
import './StateObjects/FunctionalEvent'
import './StateObjects/ClassEvent'
import FunctionalEvent from "./StateObjects/FunctionalEvent";
import ClassEvent from "./StateObjects/ClassEvent";

function App() {
  return (
    <div className="App">
        <FunctionalEvent />
        <ClassEvent />
    </div>
  );
}

export default App;
