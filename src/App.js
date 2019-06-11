import React, { Component } from "react";
import Header from "./Header";
import CounterList from './CounterList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <p>{this.props.data.counters}</p> */}
      <CounterList>CounterList</CounterList>
      </div>
    );
  }
}
//{this.props.data.counters} renders 

export default App