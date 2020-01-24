import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from 'react-router-dom';


const HolaMundo = () => <h1>Hola Mundo</h1>;  
const Test = () => <h1>TEST</h1>

class App extends React.Component {  
  render() {    
    return <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HolaMundo}/>
        <Route exact path="/test" component={Test}/>
      </Switch>
    </BrowserRouter>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
