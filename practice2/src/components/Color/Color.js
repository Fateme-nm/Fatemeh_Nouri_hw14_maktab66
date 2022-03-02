import React, { Component } from 'react';
import './Color.css'

class Color extends Component {
    render() {
        return (
            <li className='color'>
                <div className='colorSign' style={{background : this.props.title}}></div>
                <div className='colorName'>{this.props.title}</div>
            </li>
        );
    }
}

export default Color;
