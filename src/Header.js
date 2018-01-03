import React from 'react';

function Header(props) {
    return (
        <div className='header'>
            <a href='#' onClick={props.addNote}><h2 className='newNoteHeader'> New Note </h2></a>
        </div>
    )
}

export default Header;