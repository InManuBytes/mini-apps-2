import React, {Component} from 'react';

/**
 * Represents a frame in a bowling game
 */
class Frame extends Component {
  /**
   * @param {Object} props — has a .ball property that says if in the frame,
   *  it's the first or second ball
   */
  constructor(props) {
    super(props);
    this.state = {
      score: [0, 0],
    };
  }
  render() {
    return (

    );
  }
}

export default Frame;
