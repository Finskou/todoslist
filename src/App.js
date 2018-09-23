import React, { Component } from 'react';
import SingleTodo from "./singleTodo"
import './App.css';
import logo from './logo.png';

export default class App extends Component {
  // Code for simple incrementation button
  // constructor(){
  //   super();//alows to use this
  //   //set initial state
  //   this.state = {
  //     count: 0
  //   };
  // }

  // increment = () => {
  //   this.setState({ count: this.state.count + 1})
  // }
  
  // render() {
  //   return (
  //     <div>
  //       <button onClick={this.increment}> Increment</button>
  //       {this.state.count}
  //     </div>

  //   )
  // }
  constructor(){
    super();
    this.state = {
      todos: [],
      currentTodo : ""
    }
  }

  onInputChange = e => {
    this.setState({currentTodo : e.target.value})
  }

  onClick = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({todos:  todosCopy, currentTodo: ""})
  }

  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({todos: todosCopy });
  }



    render() {
      let bulletTodos = this.state.todos.map((e, i) => {
        return (
         <SingleTodo todo={e} delete={() => this.deleteTodo(i)}/>
        );
      });

      return (
        <div class="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="container">
            <input placeholder="Enter todo" value={this.state.currentTodo}
            onChange={this.onInputChange}/>
            <button onClick={this.onClick}> Add </button>
            <br />
            <br/>
            {this.state.todos.length === 0 ? "No todos yet": <ul>{bulletTodos}</ul>}
        </div>
       </div>
      )
    }
  
};