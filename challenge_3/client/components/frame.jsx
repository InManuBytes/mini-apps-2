import React, {Component} from 'react';
import Selector from './selector';

/**
 * Represents a frame in a bowling game
 */
class Frame extends Component {
  /**
   * @param {Object} props — has a .ball property that says if in the frame,
   *  it's the first or second ball, .showSelector property that let's us know
   *  what frame we're currently on, a scores array, and the total
   */
  constructor(props) {
    super(props);
    this.state = {
      selector: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }

  render() {
    const {ball, showSelector, total, current, handleSelect, scores, pinsLeft} = this.props;
    const {selector} = this.state;
    const options = selector.slice(0, pinsLeft);
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Frame {current}
          </p>
        </header>
        <table className="table is-bordered">
          {/* scores */}
          <tbody>
            {/* Input scores */}
            {/* We need to render this dynamically so that the drop down appears where it needs to be */}
            {(showSelector) ?
              <tr>
                <th>Knocked over</th>
                {scores.map((score, index) => {
                  var select = (index + 1 === ball) ? true : false;
                  return <Selector key={`${score}${index}`} options={options} ball={index + 1} select={select} handleSelect={handleSelect} />;
                })}
              </tr> :
              <tr>
                <th></th>
                {/* TODO show scores with X and / */}
                <td>{scores[0]}</td>
                <td>{scores[1]}</td>
                {(current === '10') ?
                  <td>0</td> : null
                }
              </tr>
            }
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
