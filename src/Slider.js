import React from 'react';

class Slider extends React.Component {
    state = {
        titleValue: '',
        textValue: ''
    };

    handleChange = e => {
        if (e.target.name === 'titleInput') {
            this.setState({
                titleValue: e.target.value
            });
        } else {
            this.setState({
                textValue: e.target.value
            });
        }
    };

    submitNote = () => {
        const title = this.state.titleValue;
        const text = this.state.textValue;
        this.clearInput();
        this.props.toggleSlide();
        this.props.addNote(title, text);

    }

    clearInput = () => {
        this.setState({
            titleValue: '',
            textValue: ''
        })
    }

    render() {
        let isClicked = this.props.slideToggle;
        let style = {
            top: '-800px'
        };
        if (isClicked) {
            style = {
                top: '0'
            };
        }

        return (
            <div className="slider" id="slider" style={style}>
                <input
                    className='newInput'
                    value={this.state.titleValue}
                    onChange={this.handleChange}
                    name="titleInput"
                    placeholder="Type your title.."
                />
                <textarea
                    className='newTextarea'
                    name="textInput"
                    placeholder="Type your note.."
                    value={this.state.textValue}
                    onChange={this.handleChange}
                />
                <div className="buttons">
                    <button id="submitButton" onClick={this.submitNote}>
                        Add{' '}
                    </button>
                    <button id="cancelButton" onClick={this.props.toggleSlide}>
                        Cancel{' '}
                    </button>
                </div>
            </div>
        );
    }
}

export default Slider;
