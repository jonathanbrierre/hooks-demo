import logo from './logo.svg';
import UseStateDemo from "./FunctionalComponents/UseStateDemo"
import UseMultipleStateDemo from "./FunctionalComponents/UseMultipleStateDemo"
import ClassStateDemo from "./ClassComponents/ClassStateDemo"

import './App.css';

function App() {
  return (
    <div className="App">
      <ClassStateDemo/>
      <UseStateDemo/>

      <UseMultipleStateDemo/>
    </div>
  );
}

export default App;
