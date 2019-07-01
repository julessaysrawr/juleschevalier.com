import React, { Component } from "react"
import '../styles/main.scss'
import LayoutMain from '../components/layout-main'

class Habits extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 'What do you want to do?',
      create: ["writing", "photography", "editing", "coding", "learning"],
      relax: ["do nothing", "get bored", "cooking", "friends", "read fiction", "pamper myself", "sauna"],
      strongBody: ["stretches", "yoga", "body weight movements", "weight lifting", "walking", "handstand progress"],
      clearMind: ["nap", "meditate", "presence", "video games", "reading", "sunshine", "walking", "do nothing", "just breathe"]
    }
  }

  randomObject (obj) {
    var keys = Object.keys(obj);
    return obj[keys[Math.floor(Math.random() * keys.length)]];
  }


  randomHandler = (habit) => {
    let randomItem = this.randomObject(this.state[habit]);
    this.setState({result: randomItem});
  }

  render() {

    return(
      <LayoutMain>
        <main>
          <div className="flex-container space-around wrap">
            <button onClick={() => this.randomHandler('create')} className="button">create</button>
            <button onClick={() => this.randomHandler('relax')} className="button">relax</button>
            <button onClick={() => this.randomHandler('strongBody')} className="button">strong body</button>
            <button onClick={() => this.randomHandler('clearMind')} className="button">clear mind</button>
          </div>
          <div className="flex-container">
            <p className="habit-result">{this.state.result}</p>
          </div>
        </main>
      </LayoutMain>
    )
  };
}

export default Habits;

