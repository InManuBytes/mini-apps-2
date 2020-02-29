import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

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
        <Board />
      </div>
    );
  }
}
export default App;
