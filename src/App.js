import React, { Component } from 'react';
import './assets/styles/styles.css';

// Component
import Main from './views';
import { Header } from './components/headerView/headerView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
