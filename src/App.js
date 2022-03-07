import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { greeterContract, greet } from './EthereumSetup';

class App extends React.Component {

  state = {
    greeting: ""
  }

  async componentDidMount() {
    this._asyncRequest = greeterContract().then(
      externalData => {
        this._asyncRequest = null;
        console.log(externalData)
        greet(externalData).then(greet => {
          this.setState({
            greeting: greet
          });
        })
        
      }
    );
    
  }

  render() {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.greeting}
        </header>
      </div>
    );
  }
}

export default App;
