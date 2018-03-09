import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }
  render() {
    return (
      <div className="Counter">
        <h2>{this.props.counterTitle}</h2>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={this.decrementCounter}>Decrement</button>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }

  incrementCounter() {
    let counter = this.state.counter;
    this.setState({
      counter: (counter += 1)
    });
  }

  decrementCounter() {
    let counter = this.state.counter;
    this.setState({
      counter: (counter -= 1)
    });
  }
}

export default Counter;
