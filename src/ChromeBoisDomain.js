import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    let xCoor = event.clientX
    let yCoor = event.clientY
    drawChromeBoiAtCoords(xCoor,yCoor)
  }

handleToggle = () => {
  return toggleCycling()
}

handleKey = (event) => {
  console.log(event.key)
  if (event.key === "a") {
    resize("+")
  } else if (event.key === 's') {
    resize("-")
  }
}

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-'
   */

  render() {
    return (
      <canvas onClick={this.handleToggle}
        onMouseMove={this.handleMouseMove}
        onKeyDown={this.handleKey}
        width='900'
        height='600'
      tabIndex="0">
      </canvas>
    )
  }
}
