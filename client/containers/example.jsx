import React from "react";
import Component from "../utils/component";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Example from "../components/example";
import { actions } from "../actions/example";

class ExampleContainer extends Component {
  
  render() {
    return <Example
      {...this.props}
      onClick={::this.onClick}
    />
  }

  onClick() {
    this.props.actions.testAction();
  }
}



function mapStateToProps({ example: { message } }, props) {
  return { message };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);


