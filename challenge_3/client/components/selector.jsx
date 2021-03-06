import React, {Component} from 'react';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(event) {
    var knockedPins = Number(event.target.value);
    const {handleSelect} = this.props;
    handleSelect(knockedPins);
  }

  render() {
    const {options, ball, select} = this.props;
    return (
      <td>
        <span className="tag is-rounded">Ball {ball}</span>
        {select ?
          <div className="select">
            <select value="1" onChange={this.onSelect}>
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
