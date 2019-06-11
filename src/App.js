import React, { Component } from "react";
import Header from "./Header";
import CounterList from './CounterList';

class App extends Component {
  constructor() {
    super()
    this.state = {
    numOfCounters: 5
    }
  }
addCounter = () => {
this.setState({numOfCounters: this.state.numOfCounters + 1})
}
removeCounter = () => {
  if(this.state.numOfCounters > 0){
    this.setState({numOfCounters: this.state.numOfCounters - 1 })
  }
}

  render() {
    return (
      <div className="App">
        <Header addCounter={this.addCounter} removeCounter={this.removeCounter} />
        {/* <p>{this.props.data.counters}</p> */}
      <CounterList counters={this.state.numOfCounters}></CounterList>
      </div>
    );
  }
}
//{this.props.data.counters} renders 

export default App

/* 
App: Num of Counter
  CounterList
    Coutnter: count
  Header
siblings can't talk to each other, you have to ref in parent, and let parent do all the talking

 */