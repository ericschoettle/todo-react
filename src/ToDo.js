import React, { Component } from 'react';


class Form extends Component {

  render(){
    return (
      <div>
        <form>
          <label>
            Edit: &ensp;
            <input type="text" value={this.props.todo.text} onChange={this.props.changeText} />
            <input type="hidden" id={this.props.todo.id}/>
          </label>
        </form>
        <button onClick={this.props.toggleComplete}>{ this.props.todo.complete ? 'mark incomplete' : 'mark complete' }</button>
        <br/>
        <button onClick={this.props.moveUp}>Move Up </button>
        <button onClick={this.props.moveDown}>Move Down </button>
        <button onClick={this.props.deleteTodo}>delete </button>
        <hr/>
      </div>
    )
  }
}

export default Form