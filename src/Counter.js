import React, { Component } from 'react'
import {ThemeContext} from './App'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.initialCount
        }
    }
//changeCount
changeCount(amount) {
    //this.setState({ count: this.state.count + amount })
    // the above way of updating state will cause async call which can delay and not let you do multiple calls. 
    //instead, use the adapter way.
    this.setState((prevState) => {
        return { count: prevState.count + amount }
    })
}

    render() {
        return (
            <ThemeContext.Consumer>
             {style => (
                <div>
                    <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                    <span>{this.state.count}</span>
                    <button style={style} onClick={() => this.changeCount(1)}>+</button>
                </div>
             )}   
            
            </ThemeContext.Consumer>
        )
    }
}