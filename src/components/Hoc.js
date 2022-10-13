import React, { Component } from "react";

const UpdatedComponent = (WrappedComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
    }
    onIncrease = () => {
      console.log("done");
      this.setState((prevSate) => {
        return { counter: prevSate.counter + 1 };
      });
    };
    onDecrease = () => {
      console.log("done");
      if (this.state.counter > 0) {
        this.setState((prevSate) => {
          return { counter: prevSate.counter - 1 };
        });
      }
    };
    render() {
      return (
        <WrappedComponent
          onIncrease={this.onIncrease}
          onDecrease={this.onDecrease}
          counter={this.state.counter}
        />
      );
    }
  }
  return NewComponent;
};
export default UpdatedComponent;
