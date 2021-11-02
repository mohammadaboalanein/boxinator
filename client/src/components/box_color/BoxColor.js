import React, { Component } from "react";
import { colors } from "./colors";
import Box from "./Box";
import "./BoxColor.css";

class BoxColor extends Component {
  static defaultProps = {
    numBoxes: 18
  };

  render() {
    return (
      <div className="BoxColor">
        {Array.from({ length: this.props.numBoxes }).map(() => (
          <Box colors={colors} />
        ))}
      </div>
    );
  }
}

export default BoxColor;
