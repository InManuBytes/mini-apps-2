/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import Layout from './layout';
import Frames from './components/keypad';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frames: [{1: 0, 2: 0, total: 0}],
      score: 0,
      currentFrame: 0,
      ball: 1,
    };
  }
  render() {
    const {frames, currentFrame} = this.state;
    const frame = frames[currentFrame];
    return (
      <Layout>
        <Frames current={frame} />
      </Layout>
    );
  }
}

export default App;

