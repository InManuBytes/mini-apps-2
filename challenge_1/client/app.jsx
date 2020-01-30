import React, { Component } from 'react';
import { Menu } from 'antd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Main',
    };
  }

  handleClick(e) {
    console.log('click', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="main">
          Main
        </Menu.Item>
      </Menu>
    );
  }
}

export default App;

