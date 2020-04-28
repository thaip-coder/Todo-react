import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    // Updates the state of the text box value as user types in todo item
    onChange = (e) => this.setState({ title: e.target.value });
    // On Submit, the state of the new todo will be set
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                type='text' 
                name='title' 
                style={{ flex: '10', paddiong: '5px'}}
                placeholder='Add Todo ...'
                // Pulls in value of the state 
                value={this.state.title}
                // Changes vale of the state via onChange method
                onChange={this.onChange}
                />
                <input 
                type='submit' 
                value='Submit'
                className='btn'
                style={{flex: '1'}}
                />
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo
