import React from 'react';


class Aside extends React.Component {
    render() {

        let isClicked = this.props.newNoteToggle;
        let style = {
            'top': '-800px'
        };
        if (isClicked) {
            style = {
                'top': '0'
            };
        }

        return (
            <div className='aside'>
                <div className='newNoteHidden' style={style}>
                </div>
            </div>
        )
    }

}

export default Aside;