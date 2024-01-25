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
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameListRendering from './components/NameListRendering';
import StyleSheet from './components/StyleSheet';
import './appStyle.css'
import style from './appStyle.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">

      <LifecycleA/>

      {/* <Form/> */}

      {/* <h1 className={`error`}>Error</h1>
      <h1 className={style.success }>Success</h1> */}

      {/* <StyleSheet className = {true} /> */}

      {/* <NameListRendering/> */}

      {/* <UserGreeting/> */}

      {/* <ParentComponent/> */}
      
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
