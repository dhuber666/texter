import React from 'react';
import Aside from './Aside';
import NotesList from './NotesList';

class Main extends React.Component {
    render() {
        return (
            <div className='mainContent'>
                <Aside newNoteToggle={this.props.noteToggle} />
                <NotesList />
            </div>
        )
    }
}

export default Main;