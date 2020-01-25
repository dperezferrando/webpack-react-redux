import { Component } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class Routes extends Component {
  render(){
    return <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HolaMundo}/>
        <Route exact path="/test" component={Test}/>
      </Switch>
    </BrowserRouter>
  }
}

export default Routes;