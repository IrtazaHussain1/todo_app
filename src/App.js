import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import TodoList from './components/todoList';
import Header from './components/layout/Header';
import AddTodo from './components/addTodo';
import About from './components/pages/about';
import uuid from 'uuid';

class App extends Component {
  state = { 
    todos: []
   }
  // Toggle Complete
  makeComplete = id => {
    this.setState({
      todos: this.state.todos.map(td => {
        if(td.id === id){
          td.completed = !td.completed;
        }
        return td;
      })
    });

}
handleDelete = id => {
  const todos=this.state.todos.filter(td => td.id !== id);
  this.setState({ todos })
};
addTodo = title => {
  // console.log(title);
  const newTodo = {
    id :uuid.v4(),
    title,
    completed : false
  }
  this.setState({todos: [...this.state.todos, newTodo] });
};
  render() { 
    return (
      <Router>
        <div className="App">
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo  addTodo={this.addTodo} />
            <TodoList makeComplete={this.makeComplete} handleDelete={this.handleDelete} todo={this.state.todos} />
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
      </div>
      </Router>
    );
  }
}
 
export default App;
