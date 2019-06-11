import React, { Component } from 'react';
// import { listenerCount } from 'events';
import Counter from './Counter';

class CounterList extends Component {
    render() {
        let list = []
    for(let i=0; i < this.props.counters; i++){
list.push(<Counter key={i}/>)
    }
        return (
            <div className="Counter-row">
                {list}
            </div>
        );
    }
}

export default CounterList;