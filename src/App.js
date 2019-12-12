import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/Navbar'
import MainPart from './Components/MainPart'
import BottomBar from './Components/BottomBar'
import MiddlePart from './Components/MiddlePart'
import Happening from './Components/Happening'

class App extends Component {
  state = {
    order: 1,
    topic: "TRAVEL",
    info: "Travelling Turkey is good for your menthal health!",
    title_: "İstanbul Welcomes You!"

  }

  render() {

    return (
      <div className="App">
        <div className="navigation">
          <NavBar className="imageNav" />
        </div>
        <div className="container">
          <div className="rows">
            <div className="row">
              <MainPart
                orderData={this.state.order}
                topicData={this.state.topic}
                infoData={this.state.info}
                titleData={this.state.title_}
              />
            </div>
            <br />
            <div className="row">
              <MiddlePart />
            </div>
            <div className="row">
              <Happening />
            </div>
          </div>
        </div>
        <div className="bottom">
          <BottomBar className="imageBottom" />
        </div>
      </div>
    )
  }
}
export default App;