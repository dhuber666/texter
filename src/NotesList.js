import React from 'react';
import Note from './Note';

class NotesList extends React.Component {

    state = {
        notes: []
    }

    render() {
        return (
            <div className='notesList'>
                <Note note={{
                    title: 'My note',
                    text: 'das ist ein super text.alalalalalalalaalala'
                }} />
                <Note note={{
                    title: 'My note',
                    text: 'das ist ein super text.alalalalalalalaalala'
                }} />
                <Note note={{
                    title: 'My note',
                    text: 'das ist ein super text.alalalalalalalaalala'
                }} /><Note note={{
                    title: 'My note',
                    text: 'das ist ein super text.alalalalalalalaalala'
                }} />
                <Note note={{
                    title: 'My note',
                    text: 'das ist ein super text.alalalalalalalaalala'
                }} />
                <Note note={{
                    title: 'My note',
                    text: 'das ist ein super text.alalalalalalalaalala'
                }} /><Note note={{
                    title: 'My note',
                    text: 'das ist ein super text.alalalalalalalaalala'
                }} />

            </div>
        )
    }
}

export default NotesList;