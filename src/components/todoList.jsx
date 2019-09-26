import React, { Component } from 'react';
import ToDoItems from './todoItems'; 

class TodoList extends Component {
    render() { 
        return this.props.todo.map((td) => <ToDoItems key={td.id} handleDelete={this.props.handleDelete} makeComplete={this.props.makeComplete}  todo={td} /> ) ;
        // return <toDos todo={this.props.tos} />
    }
}
 
export default TodoList;