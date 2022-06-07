import React, { Component } from 'react';
import Color from '../Color/Color';
import './ColorGenerator.css';

class Colorgenerator extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            colors: []
        }
    }

    addColor = () => {
        let color = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
        this.setState({colors: [color, ...this.state.colors]})
    }

    render() {
        return (
            <div className='container'>
                <h2 className='title'>practice2</h2>
                <button className='addBtn' onClick={this.addColor}>add color</button>
                <ul className='colorList'>
                    {this.state.colors.map((color, i) => <Color title = {color} key = {i}/>)}
                </ul>
            </div>
        );
    }
}

export default Colorgenerator;
