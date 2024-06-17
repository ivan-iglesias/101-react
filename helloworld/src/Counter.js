import React from "react";

// Class component
class Counter extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {counter: 0};

  incrementCounter = () => this.setState({counter: parseInt(this.state.counter) + 1});

  render() {
    return (
      <>
        <button onClick={this.incrementCounter}>{this.props.buttonText}</button>
        <br/>
        {this.state.counter}
        <br />
      </>
    )
  }
}

export default Counter;
