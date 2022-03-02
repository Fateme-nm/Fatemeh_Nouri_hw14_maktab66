import React, {Component} from 'react';
import Button from '../Button/Button';
import './Counter.css';

class Counter extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            counter: 0,
        }
    }

    increase = () => this.setState({counter: this.state.counter + 1})

    decrease = () => {
        if (this.state.counter === 0) return
        this.setState({counter: this.state.counter - 1})
    }

    reset = () => this.setState({counter: 0})

    render() {
        return (
            <div className='container'>
                <div className='title'>
                    <h2>practice1</h2>
                </div>
                <div className='counter'>
                    <p>{this.state.counter}</p>
                </div>
                <div className='btns'>
                    <Button title = 'increase' clickHandler = {this.increase}/>
                    <Button title = 'decrease' clickHandler = {this.decrease}/>
                    <Button title = 'reset' clickHandler = {this.reset}/>
                </div>
            </div>
        )
    }
}

export default Counter;