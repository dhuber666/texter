import React from 'react';
import Note from './Note';
import EditableNote from './EditableNote';

class NotesList extends React.Component {

    handleDelete = (e) => {
        let noteId = e.target.id;

        this.props.handleDelete(noteId);
    }

    handleEdit = (e, title, text, id) => {
        // let noteId = e.target.id;


        if (!id) {
            id = e.target.id;
            this.props.handleEdit(id);
        } else {
            this.props.handleEdit(id, title, text);
        }


    }

    render() {



        let notes = this.props.notes.map((note, id) => {
            if (note.editToggle) {
                return (
                    <EditableNote key={id} title={note.title} text={note.text} id={note.id} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
                )
            } else {
                return (
                    <Note key={id} title={note.title} text={note.text} id={note.id} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
                )
            }


        })

        return (
            <div className='wrapper'>
                {notes}
            </div>


        )
    }
}

export default NotesList;