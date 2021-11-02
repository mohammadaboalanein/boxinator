import React, { Component } from "react";
import { choice } from "./helpers";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.colors)
    };
  }

  pickColor = () => {
    this.setState({
      color: choice(
        this.props.colors.filter(color => color !== this.state.color)
      )
    });
  };

  handleClick = () => {
    this.pickColor();
  };

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: `#${this.state.color}` }}
        onClick={this.handleClick}
      />
    );
  }
}

export default Box;
