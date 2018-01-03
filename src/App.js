import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {

  state = {
    newNoteToggle: false
  }

  addNoteClick = (e) => {
    this.toggleNewNote();
  }

  toggleNewNote = () => {
    let currentBool = this.state.newNoteToggle;
    this.setState({
      newNoteToggle: !currentBool
    })
  }

  render() {
    return (
      <div className="App">
        <Header addNote={this.addNoteClick} />
        <Main noteToggle={this.state.newNoteToggle} />
      </div>
    );
  }
}

export default App;
