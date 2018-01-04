import React from 'react';
import Slider from './Slider'

function Header(props) {
    return (
        <div>
            <nav className='nav'>
                <div className='left'>
                    <h2> Texter </h2>

                </div>

                <div className='middle' onClick={props.toggleSlide}>
                    <a href='#'><h3> Add Note </h3>
                        <i className="arrow down"></i>
                    </a>
                </div>

                <div className='right'>
                    <ul>

                        <li> Login </li>
                    </ul>
                </div>
            </nav>
            <Slider toggleSlide={props.toggleSlide} slideToggle={props.slideToggle} addNote={props.addNote} />
        </div>
    )
}

export default Header;