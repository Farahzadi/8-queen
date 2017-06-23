import React from 'react';

import { Chess } from './components/chess'

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      model: [0, 0, 0, 0, 0, 0, 0, 0],
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
