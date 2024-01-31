import logo from "./logo.svg";
import "./App.css";
// import MyComponent from './components/Greet';  // we can give our own name if default exported
import { Greet } from "./components/Greet"; // Named export
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameListRendering from "./components/NameListRendering";
import StyleSheet from "./components/StyleSheet";
import "./appStyle.css";
import style from "./appStyle.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundry from "./components/ErrorBoundry";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterRenderProps from "./components/CounterRenderProps";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";

function App() {
  return (
    <div className="App">

    {/* <UserProvider value={"Hussnain"}>
      <ComponentC/>
    </UserProvider> */}




    {/*we called another component in new common component so that data is not mixed and every component have it's own memory/data*/}   

      {/* <CounterRenderProps
        render={(count, increamentCount) => (
          <ClickCounterTwo count={count} increamentCount={increamentCount} />
        )}
      /> */}

    {/* we can also pass props via children */}
      {/* <CounterRenderProps>
        {
          (count, increamentCount) => (
            <HoverCounterTwo count={count} increamentCount={increamentCount} />
          )
        }
      </CounterRenderProps> */}
      



      {/* <ClickCounterTwo/>
    <HoverCounterTwo/>
    <User render={(isLoggedIn) => isLoggedIn ? 'Hussnain' : 'Guest'}/> */}





      {/* <ClickCounter name={"Hussnain"}/>
    <HoverCounter name={"Hussnain"}/> */}

      {/* <ClickCounter/>
    <HoverCounter/> */}

      {/* 
      <ErrorBoundry>
        <Hero heroName={"Hussnain"}/>
      </ErrorBoundry>
      
      <ErrorBoundry>
        <Hero heroName={'Joker'}/>
      </ErrorBoundry>

      <ErrorBoundry>
        <Hero heroName={'Salaar'}/>
      </ErrorBoundry> */}

      {/* <PortalDemo/> */}

      {/* <FRParentInput/> */}

      {/* <FocusInput/> */}

      {/* <RefsDemo/> */}

      {/* <ParentComp/> */}

      {/* <Table/> */}

      {/* <FragmentDemo/> */}

      {/* <LifecycleA/> */}

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
