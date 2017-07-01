import React from 'react';

import { Chess } from './components/chess'

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // model: [0, 0, 0, 0, 0, 0, 0, 0],
      // model: [1, 3, 4, 0, 7, 4, 6, 2],
      model: [1, 3, 4, 0, 6, 4, 6, 2],
      // model: [3, 5, 7, 1, 6, 0, 2, 4],
      threats: 2
    }
  }

  render() {
    const { model, threats } = this.state
    return (
      <div>
        <Chess
          model={model}
          threats={threats}
        />
      </div>
    )
  }
}

export default App;
