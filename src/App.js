import React, { Component } from 'react';
import ToDo from './ToDo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.addTodo=this.addTodo.bind(this);
  
    // default state 
    this.state = {
      currentID: 0,
      todos: [{
        text: '',
        complete: false,
        ID: 0
      }]
    }
  }
  moveUp(movedTodo) {
    let todos = [...this.state.todos];
    let index = todos.findIndex((todo)=>{return todo.ID === movedTodo.ID});
    if (index > 0) {
      todos[index] = todos[index - 1];
      todos[index - 1] = movedTodo;
      this.setState({
        todos
      })
    }
  }
  moveDown(movedTodo) {
    let todos = [...this.state.todos];
    let index = todos.findIndex((todo)=>{return todo.ID === movedTodo.ID});
    if (index < todos.length - 1) {
      todos[index] = todos[index + 1];
      todos[index + 1] = movedTodo;
      this.setState({
        todos
      })
    }
  }
  changeText(event, todo){
    const text = event.target.value;
    const newToDo = {...todo, text: text};
    let todos = [...this.state.todos];
    let index = todos.findIndex((todo)=>{return todo.ID === newToDo.ID});
    todos[index] = newToDo;
    this.setState({
      todos
    })
    
  }
  toggleComplete(toggledTodo){
    let todos = [...this.state.todos];
    let index = todos.findIndex((todo)=>{return todo.ID === toggledTodo.ID});
    todos[index] = {...toggledTodo, complete: !toggledTodo.complete};
    this.setState({
      todos
    })
  }
  addTodo(){
    this.setState({
      todos: [...this.state.todos, {text: '', ID: this.state.currentID + 1}],
      ID: this.state.currentID ++
    });
  }
  deleteTodo(oldTodo){
    let todos = [...this.state.todos];
    let index = todos.findIndex((todo)=>{return todo.ID === oldTodo.ID});
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }
  render () {
    const todos = this.state.todos.map(todo=>{
      return (
        <ToDo 
          todo={todo}
          moveUp={()=>this.moveUp(todo)}
          moveDown={()=>this.moveDown(todo)}
          changeText={(event)=>this.changeText(event, todo)}
          addTodo={()=>this.addTodo()}
          toggleComplete={()=>this.toggleComplete(todo)}
          deleteTodo={()=>this.deleteTodo(todo)}
          key={todo.ID}
        />
      )
    })
    return (
      <div className="App">
        {todos}
        <br/>
        <button onClick={this.addTodo}> Add Todo </button>
      </div>
    );
  } 
}

export default App;
