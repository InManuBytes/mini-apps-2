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
      strike: "X",
      spare: "/",
    };
    this.showScore = this.showScore.bind(this);
  }

  showScore() {

  }

  render() {
    const {ball, showSelector, score, total, current} = this.props;
    const {selector, pinsLeft} = this.state;
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
              <td>{this.showScore(score[0])}</td>
              <td>{this.showScore(score[1])}</td>
            </tr>
            {/* Input score */}
            {/* We need to render this dynamically so that the drop down appears where it needs to be */}
            {(showSelector) ? <Selector options={options} /> : null}
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
