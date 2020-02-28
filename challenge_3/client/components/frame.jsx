import React, {Component} from 'react';
import Selector from './selector';

/**
 * Represents a frame in a bowling game
 */
class Frame extends Component {
  /**
   * @param {Object} props — has a .ball property that says if in the frame,
   *  it's the first or second ball, .showSelector property that let's us know
   *  what frame we're currently on, a score array, and the total
   */
  constructor(props) {
    super(props);
    this.state = {
      selector: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      pinsLeft: 10,
      score: [null, null],
    };
    this.showScore = this.showScore.bind(this);
  }

  showScore(selected) {
    const {pinsLeft, score} = this.state;
    pinsLeft =- selected;
    const {ball} = this.props;
    const rules = {
      strike: "X",
      spare: "/",
    }
    if (pinsLeft === 0 && ball === 1) {
      score[0] = rules[strike];
    } else if (pinsLeft === 0) {
      score[1] = rules[spare];
    }
    this.setState({ pinsLeft, score })
  }

  render() {
    const {ball, showSelector, total, current} = this.props;
    const {selector, pinsLeft, score} = this.state;
    const options = selector.slice(0, pinsLeft);
    return (
      <div className="table-container">
        <table className="table is-bordered">
          {/* header */}
          <thead>
            <tr>
              <th>
                Frame {current}
              </th>
            </tr>
          </thead>
          {/* scores */}
          <tbody>
            <tr>
            </tr>
            <tr>
              <th></th>
              <td>{score[0]}</td>
              <td>{score[1]}</td>
            </tr>
            {/* Input score */}
            {/* We need to render this dynamically so that the drop down appears where it needs to be */}
            {(showSelector) ? <Selector options={options} select={this.showScore} /> : null}
            <tr>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Frame;
