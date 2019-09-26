import React, { Component } from 'react';

class AddTodo extends Component {
    state = { 
        title:''
     }

    fieldChange = (e) => this.setState({ [e.target.name] : e.target.value })
    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }
    render() { 
        return ( 
            <form onSubmit={this.submitTodo} style={{ display: 'flex' }} >
                <input
                type="text"
                placeholder="Add TODO ...."
                style={{ flex: '10', padding:'10px', marginLeft:'10%' }}
                value={this.state.title}
                name="title"
                onChange={this.fieldChange}

                />
                <input
                type="submit"
                value="Add"
                className="btn"
                style={{ flex : '1', marginRight:'10%'}}
                />
            </form>
         );
    }
}
 
export default AddTodo;