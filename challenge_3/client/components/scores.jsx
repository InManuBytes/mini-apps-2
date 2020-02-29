import React, {Component} from 'react';
import Frame from './frame';
import _ from 'lodash';

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totals: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

  render() {
    const {frames} = this.props;
    const {totals} = this.state;
    return (
      <div className="tile is-ancestor">
        {_.map(frames, (scores, frame) => {
          return (
            <div className="tile is-parent">
              <div className="tile is-child">
               <Frame scores={scores} current={frame} total={totals[frame]} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Scores;
