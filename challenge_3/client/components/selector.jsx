import React, {Component} from 'react';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const {options} = this.props;
    return (
      <tr>
        <th>Knocked</th>
        <td>
          <div className="select">
            <select>
              {options.map(option => {
                return <option key={option}>{option}</option>
              })}
            </select>
          </div>
        </td>
        <td></td>
      </tr>
    );
  }
}

export default Selector;
