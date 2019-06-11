import React, { Component } from 'react';

class Counter extends Component {
    //to add  state you have to add a counter
    constructor(){
        super()
        this.state = {
            count: 0
        }
        this.increaseCount = this.increaseCount.bind(this)
        //you have to bind your method if you are using a function you can use => so you don't have to bind
    }
    increaseCount(){
        this.setState({count: this.state.count + 1})
    }
    decreaseCount = () => {
        this.setState({count: this.state.count - 1})
    }
    in100Count = () => {
        this.setState({count: this.state.count + 100})
    }
    zeroCount = () => {
        this.setState({count: 0})
    }
    render() {
        return (
            <div>
                <h4> Counter : {this.state.count}</h4>
                <button onClick={this.increaseCount}> + </button>
                <button onClick={this.in100Count}> ++ </button>
                <button onClick={this.decreaseCount}> - </button>
                <button onClick={this.zeroCount}> 0 </button>
                
            </div>
        );
    }
}

export default Counter;