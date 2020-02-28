import React, {Component} from 'react';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    const {options, ball, select} = this.props;
    return (
      <td>
        <span className="tag is-rounded">Ball {ball}</span>
        {select ?
          <div className="select">
            <select>
              {options.map(option => {
                return <option key={option}>{option}</option>
              })}
            </select>
          </div> : null
        }
      </td>
    );
  }
}

export default Selector;
