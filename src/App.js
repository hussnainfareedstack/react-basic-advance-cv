import logo from './logo.svg';
import './App.css';
// import MyComponent from './components/Greet';  // we can give our own name if default exported
import {Greet} from './components/Greet';         // Named export
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';



function App() {
  return (
    <div className="App">

      
      
      {/* <EventBind/> */}

      {/* <FunctionClick/>
      <ClassClick/> */}

      {/* <Counter/> */}

      {/* <Message/> */}
      
      {/* Props : to send properties to component pass via attributes in component name tag */}

      {/* <Greet name = "Hussnain" lastName="Fareed"> 
        <p>This is a person 1.</p>
      </Greet>  

      <Greet name = "Salaar" lastName = "Fareed"> 
        <button> Action </button>
      </Greet>
      
      <Greet name = "Fatima" lastName = "Zahra"/>

      <Welcome name = "Hussnain" lastName="Fareed"/>
      <Welcome name = "Sikandar" lastName="Fareed">
        <button>Go</button>
      </Welcome> */}


    </div>
  );
}

export default App;
