import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      fact: {}
    }
    this.eventHandeler = this.eventHandeler.bind(this)
  }
  eventHandeler() {
    fetch("https://catfact.ninja/fact")
      .then(res => res.json())
      .then(data => {
        this.setState({
          fact: data
        })
      })
  }

  render() {
    const text = this.state.fact.fact
    return (
      <div>
        <div className="App">
          <h1>Cat facts!</h1>
        <button onClick={this.eventHandeler}>Click Here</button>
        <p>{text}</p>
        </div>
       
      </div>
   
    );
  }
}

export default App;
