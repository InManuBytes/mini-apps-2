/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import Layout from './layout';
import Frame from './components/frame';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frames: {
        1: [0, 0],
        2: [0, 0],
        3: [0, 0],
        4: [0, 0],
        5: [0, 0],
        6: [0, 0],
        7: [0, 0],
        8: [0, 0],
        9: [0, 0],
        10: [0, 0, 0],
      },
      lastCalculatedScore: 0,
      currentFrame: 1,
      ball: 1,
      turnsToCalculateScore: 2,
    };
    this.calculateFrameTotal = this.calculateFrameTotal.bind(this);
    this.readyToCalculateScore = this.readyToCalculateScore.bind(this);
  }

  calculateFrameTotal(frameNumber) {
    const {frames} = this.state;
    const score = frames[frameNumber]; // [2,6]
    // when all pins are knocked over, there are special rules.
    if (score[0] === "X" || score[1] === "/") {

    } else {

    }

  }
  // whenever we update the score on a select we want to check if we can calculate the score
  readyToCalculateScore(knockedPins) {
    console.log('ready');
    if (knockedPins === 10) {
      // we need to make sure we don't calculate until three more turns
    }
  }

  render() {
    const {frames, currentFrame, ball} = this.state;
    const score = frames[currentFrame];
    return (
      <Layout>
        {/* We want to try to calculate a score everytime we're ready to do so*/}
        <Frame current={currentFrame} score={score} total={null} ball={ball} showSelector={true} ready={this.readyToCalculateScore} handleSelect={this.readyToCalculateScore} />
      </Layout>
    );
  }
}

export default App;

