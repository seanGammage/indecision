import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        e.preventDefault();
        
        const inputText = e.target.elements.inputText.value.trim();
        const error = this.props.handleAddOption(inputText);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.inputText.value = '';
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="inputText" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}