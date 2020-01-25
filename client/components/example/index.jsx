import React from "react";
import Component from "../../utils/component";

class Example extends Component {
  render() {
    return (
    <div>
      <h1>{this.props.message}</h1>
      <input type="button" value="Click" onClick={::this.props.onClick}/>
    </div>
    );
  }
}

export default Example;