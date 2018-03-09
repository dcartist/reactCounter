import React, { Component } from "react";
import Counter from "./Counter";

class App extends Component {
  constructor() {
    super();

    this.state = {
      counters: 0
    };

    this.increaseCounters = this.increaseCounters.bind(this);
    this.decreaseCounters = this.decreaseCounters.bind(this);
  }

  render() {
    let counters = [];
    for (let index = 0; index < this.state.counters; index++) {
      counters.push(<Counter key={index} counterNumber={index} />);
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Counters</h1>
          <button onClick={this.increaseCounters}>+</button>
          <button onClick={this.decreaseCounters}>-</button>
        </header>
        <div className="Counter-row">{counters}</div>
      </div>
    );
  }

  increaseCounters() {
    let counters = this.state.counters + 1;

    this.setState({
      counters
    });
  }

  decreaseCounters() {
    let counters = this.state.counters - 1;

    this.setState({
      counters
    });
  }
}

export default App;
