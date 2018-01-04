import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import uuidv4 from 'uuid';

class App extends Component {

  state = {
    slideToggle: false,

    notes: [
      {
        id: uuidv4(),
        title: 'test',
        text: 'another text test',
        editToggle: false
      }
    ]
  }

  addNote = (newTitle, newText) => {
    const newNote = {
      id: uuidv4(),
      title: newTitle,
      text: newText

    }



    this.setState({
      notes: this.state.notes.concat([newNote])
    })

    // this.setState = ({

    // })

  }

  toggleSlide = () => {
    let currentBool = this.state.slideToggle;

    this.setState({
      slideToggle: !currentBool
    })
  }

  deleteNote = (noteId) => {

    let newNotes = this.state.notes.filter((note) => {
      return note.id !== noteId;
    })

    this.setState({
      notes: newNotes
    })
  }

  //TODO: THis function is not re rendering the site and therefore chaning on notes is not working
  updateNote = (noteId, newTitle, newText) => {


    let newNotes = this.state.notes.map((note) => {
      if (note.id === noteId) {
        return Object.assign({}, note, {
          title: newTitle,
          text: newText,
          editToggle: !note.editToggle
        })
      } else {
        return note
      }
    })


    this.setState({
      notes: newNotes
    })

  }



  render() {
    console.log(this.state.notes)
    return (
      <div className="App">
        <Header toggleSlide={this.toggleSlide} slideToggle={this.state.slideToggle} addNote={this.addNote} />
        <Main notes={this.state.notes} handleDelete={this.deleteNote} handleEdit={this.updateNote} />
      </div>
    );
  }
}

export default App;
