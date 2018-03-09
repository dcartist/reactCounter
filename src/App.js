import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Counters</h1>
          <button>+</button>
          <button>-</button>
        </header>
        <div className="Counter-row" />
      </div>
    );
  }
}

export default App;
