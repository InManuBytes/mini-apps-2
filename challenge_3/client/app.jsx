/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import Layout from './layout';
import Frame from './components/frame';
import Scores from './components/scores';

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
      pinsLeft: 10,
      turnsToCalculateScore: 2,
      ready: false,
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
    const {turnsToCalculateScore, currentFrame, frames, ball, pinsLeft} = this.state;
    // TODO if the turns to calculate score is 0, calculate
    var newFrame = frames[currentFrame];
    newFrame[ball - 1] = knockedPins;
    var newPinsLeft;
    // update only the current frame
    const newFrames = {
      ...frames,
      [currentFrame]: newFrame
    }
    var newTurns = turnsToCalculateScore;
    var newFrame = currentFrame;
    var currentBall = ball;
    if (knockedPins !== 10 && ball === 1) {
      // we need to make sure we don't calculate until next turn
      newTurns--;
      currentBall++;
      newPinsLeft = pinsLeft - knockedPins;
    } else {
      if (knockedPins !== 10 && ball === 2) {

      }
      currentBall = 1;
      newFrame++;
      newTurns++;
    }
    this.setState({frames: newFrames, turnsToCalculateScore: newTurns, currentFrame: newFrame, ball: currentBall, pinsLeft: newPinsLeft})

  }

  render() {
    const {frames, currentFrame, ball, pinsLeft} = this.state;
    const scores = frames[currentFrame];
    console.log(this.state);
    return (
      <Layout>
        {/* We want to try to calculate a score everytime we're ready to do so*/}
        {/* TODO render frames dynamically up to currentFrame */}
        <Scores frames={frames} />
        <Frame scores={scores} current={currentFrame} ball={ball} showSelector={true} handleSelect={this.readyToCalculateScore} pinsLeft={pinsLeft} />
      </Layout>
    );
  }
}

export default App;

