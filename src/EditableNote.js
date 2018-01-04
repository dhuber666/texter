import React from 'react';

class EditableNote extends React.Component {

    state = {
        titleValue: this.props.title,
        textValue: this.props.text,
        id: this.props.id

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

    handleEdit = (e) => {
        let title = this.state.titleValue;
        let text = this.state.textValue;
        let id = this.state.id;



        this.props.handleEdit(e, title, text, id);
    }

    render() {
        return (
            <div className='card'>
                <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                <input
                    value={this.state.titleValue}
                    onChange={this.handleChange}
                    name="titleInput"
                    placeholder="Type your title.."
                />
                <textarea
                    className='editTextArea'
                    name="textInput"
                    placeholder="Type your note.."
                    value={this.state.textValue}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleEdit} id={this.props.id}> Done </button>
            </div>
        )
    }
}

export default EditableNote;