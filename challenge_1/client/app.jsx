import React, { Component } from 'react';
import { Menu, Input, Pagination } from 'antd';
const { Search } = Input;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'Main',
      currentPage: '1',
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);

  }

  handleMenuClick(e) {
    console.log('click', e);
    this.setState({
      menu: e.key,
    });
  }

  onPageChange(page) {
    console.log(page);
    this.setState({
      currentPage: page,
    });
  }

  // user the Server.search method to get results

  render() {
    // our server is imported as props in the index file
    const { Server } = this.props;
    return (
      <div>
        <Menu onClick={this.handleMenuClick} selectedKeys={[this.state.menu]} mode="horizontal">
          <Menu.Item key="main">
            Main
          </Menu.Item>
          <Menu.Item key="search" disables="true">
            {/* TO DO connect search input to state and to url */}
            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
          </Menu.Item>
        </Menu>
        <Pagination current={this.state.currentPage} onChange={this.onPageChange} total={20} />
      </div>
    );
  }
}

export default App;

