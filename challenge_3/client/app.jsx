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
      totals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      currentFrame: 1,
      ball: 1,
      pinsLeft: 10,
      turnsToCalculateScore: 2,
    };
    this.calculateFrameTotal = this.calculateFrameTotal.bind(this);
    this.readyToCalculateScore = this.readyToCalculateScore.bind(this);
  }

  calculateFrameTotal() {
    const { frames, currentFrame, totals } = this.state;
    var newTotals = totals.slice();
    console.log(newTotals);
    for (let i = 1; i < currentFrame; i++) {
      var currentScore = frames[`${i}`];
      var ball1 = currentScore[0];
      var ball2;
      if (ball1 === 10) {
        console.log('STRIKE');
        // get next two ball scores
        ball2 = frames[`${i + 1}`]
      }
    }
    return newTotals;
  }
  // whenever we update the score on a select we want to check if we can calculate the score
  readyToCalculateScore(knockedPins) {
    const {turnsToCalculateScore, currentFrame, frames, ball, pinsLeft, totals} = this.state;
    // TODO if the turns to calculate score is 0, calculate
    var newFrame = frames[currentFrame];
    newFrame[ball - 1] = knockedPins;
    var newPinsLeft
    var newTotals = totals.slice();
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
      newTotals = this.calculateFrameTotal();
      // reset values
      currentBall = 1;
      newPinsLeft = 10;
      // go to next frame and add right turns
      newFrame++;
      newTurns++;
    }
    this.setState({frames: newFrames, turnsToCalculateScore: newTurns, currentFrame: newFrame, ball: currentBall, pinsLeft: newPinsLeft, totals: newTotals})

  }

  render() {
    const {totals, frames, currentFrame, ball, pinsLeft} = this.state;
    const scores = frames[currentFrame];
    console.log(this.state);
    return (
      <Layout>
        {/* We want to try to calculate a score everytime we're ready to do so*/}
        {/* TODO render frames dynamically up to currentFrame */}
        <Scores frames={frames} totals={totals} />
        <Frame scores={scores} current={currentFrame} ball={ball} showSelector={true} handleSelect={this.readyToCalculateScore} pinsLeft={pinsLeft} />
      </Layout>
    );
  }
}

export default App;

