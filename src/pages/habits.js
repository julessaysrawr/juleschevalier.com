import React, { Component } from "react"
import '../styles/main.css'
import '../styles/queries.css'
import Nav from '../components/nav.js'
import Button from '../components/button';

class Habits extends Component {

  constructor(props) {
    super(props);
    this.createHandler = this.createHandler.bind(this);
    this.relaxHandler = this.relaxHandler.bind(this);
    this.strongBodyHandler = this.strongBodyHandler.bind(this);
    this.clearMindHandler = this.clearMindHandler.bind(this);

    // this.randomHandler = this.randomHandler.bind(this);



    this.state = {
      result: 'What do you want to do?',
      create: ["writing", "photography", "editing", "coding", "learning"],
      relax: ["do nothing", "get bored", "cooking", "friends", "read fiction", "pamper myself"],
      strongBody: ["stretches", "yoga", "body weight movements", "weight lifting", "walking", "handstand progress"],
      clearMind: ["nap", "meditate", "presence", "video games", "reading", "sunshine", "walking"]
    }
  }

  randomObject (obj) {
    var keys = Object.keys(obj);
    return obj[keys[Math.floor(Math.random() * keys.length)]];
  }

  // randomHandler(state) {
  //   let randomItem = this.randomObject(state);
  //   console.log("randomItem: ", randomItem);
  // }

  createHandler() {
    let randomItem = this.randomObject(this.state.create);
    this.setState({result: randomItem});
    console.log("randomItem: ", randomItem);
  }

  relaxHandler() {
    let randomItem = this.randomObject(this.state.relax);
    this.setState({result: randomItem});
    console.log("randomItem: ", randomItem);
  }

  strongBodyHandler() {
    let randomItem = this.randomObject(this.state.strongBody);
    this.setState({result: randomItem});
    console.log("randomItem: ", randomItem);
  }

  clearMindHandler() {
    let randomItem = this.randomObject(this.state.clearMind);
    this.setState({result: randomItem});
    // console.log("result: ", this.state.result);
    
    console.log("randomItem: ", randomItem);
  }

  render() {

    return(
      <div>
        <header>
          <Nav />
        </header>
        <div className="flex-container space-around">
          <button onClick={this.createHandler} className="button">create</button>
          <button onClick={this.relaxHandler} className="button">relax</button>
          <button onClick={this.strongBodyHandler} className="button">strong body</button>
          <button onClick={this.clearMindHandler} className="button">clear mind</button>
          
        </div>
        <div className="flex-container">
          <p className="habit-result">{this.state.result}</p>
        </div>
      </div>
    )
  };
}

export default Habits;

