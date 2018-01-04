import React from 'react';

function Note(props) {


    return (
        <div className='card'>
            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
            <h3 className='noteTitle'> {props.title} </h3>
            <hr />
            <p className='noteText'>{props.text} </p>
            <div className='actions'>
                <i className="fa fa-pencil" aria-hidden="true" onClick={e => props.handleEdit(e, props.title, props.text, props.id)} id={props.id}></i>
                <i className="fa fa-trash" aria-hidden="true" onClick={props.handleDelete} id={props.id}></i>
            </div>
        </div>
    )
}

export default Note;