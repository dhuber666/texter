import React from 'react';

function Note(props) {
    return (
        <div className='note'>
            <h3> {props.note.title} </h3>
            <p> {props.note.text} </p>
            <div className='controls'>
                <p> Delete </p>
                <p> Edit </p>
            </div>


        </div>
    )
}

export default Note;