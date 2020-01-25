import React from "react";
import Component from "./utils/component";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./components/routes";

class App extends Component {  
  render() {
    return <Provider store={store}>
      <Routes/>
    </Provider>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
