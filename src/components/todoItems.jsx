import React, { Component } from 'react';

class ToDoItems extends Component {
    // basic Div Style
    getStyle = () => {
        return {
       textDecoration: this.props.todo.completed ? 'line-through' : 'none',
       color: this.props.todo.completed ? 'green' : 'black',
       borderBottom: '1px #ccc dotted',
       padding: '10px',  
       textAlign:'left',
       margin:'0% 10%',
        }
    }
    
    render() {
        const {id, title} = this.props.todo;
        return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.makeComplete.bind(this, id)} /> {' '}
                {title}
                <button style={getBtnStyle} onClick={this.props.handleDelete.bind(this,id)} >X</button>
            </p>
        </div>
        );
    } 
}
const getBtnStyle = {
    background: 'red',
    color:'white',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right',
}
 
export default ToDoItems;