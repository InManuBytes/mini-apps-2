import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BoardContainer from './containers/BoardContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    }
  }

  render() {
    return (
      <div className="App">
        <BoardContainer />
      </div>
    );
  }
}
export default App;
