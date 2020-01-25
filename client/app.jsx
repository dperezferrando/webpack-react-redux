import { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";

const HolaMundo = () => <h1>Hola Mundo</h1>;  
const Test = () => <h1>TEST</h1>

class App extends Component {  
  render() {
    return <Provider store={store}>
      <Routes/>
    </Provider>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
