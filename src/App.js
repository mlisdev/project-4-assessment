import React, { Component } from 'react';
import CircleSelector from './Components/CircleSelector/CircleSelector';
import Circles from './Components/Circles/Circles';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: 1
    }
  };

  handleClick = clickedBtn => {
    this.setState({ selected: clickedBtn });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main className="App main">
          <CircleSelector
            handleClick={this.handleClick}
            selected={this.state.selected} />
          <Circles
            selected={this.state.selected} />
        </main>
      </div>
    );
  }
}
export default App;