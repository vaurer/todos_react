import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskAdder from "./components/TaskAdder";
import ToDoList from "./components/ToDoList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => 

      this.setState({
        todos:json
      })
      );
  }

  addTask = (value) => {
    let todo = {
      id: 1,
      title: value,
      done: false,
    };
    let todos = this.state.todos;
    todos.push(todo);

    this.setState({
      todos: todos,
    });
  };

  onDeleteTask=(id)=>{
    let todos = this.state.todos;
    let index = todos.findIndex(todo=> todo.id===id)
    todos.splice(index, 1)

    this.setState({
      todos: todos,
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <TaskAdder onTaskAdded={this.addTask} />
        <ToDoList todos={this.state.todos} onDelete={this.onDeleteTask}/>
      </div>
    );
  }
}


