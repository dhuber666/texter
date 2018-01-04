import React from 'react';

import NotesList from './NotesList';

class Main extends React.Component {
    render() {


        return (
            <div className='container'>

                <NotesList notes={this.props.notes} handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit} />
            </div>
        )
    }
}

export default Main;