import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  render() {
  return (
    <div className="App">
      <Chart/>
    </div>
  );
  }
}

export default App;
