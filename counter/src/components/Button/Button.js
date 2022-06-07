import React, {Component} from "react";
import './Button.css'

class Button extends Component {
    render() {
        return(
            <button className='btn' onClick={this.props.clickHandler}>
                {this.props.title}
            </button>
        )
    }
}

export default Button;