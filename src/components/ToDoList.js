import React, { Component } from 'react';
import ToDo from "./ToDo";
import styles from './ToDoList.module.css'

class ToDoList extends Component {

  getAllTodos() {
    let widgets = [];
    this.props.todos.forEach(todo => {
      widgets.push(<ToDo title={todo.title} isDone={todo.done} id={todo.id} onDelete={this.props.onDelete}/>);
    });
    return widgets;
  }

  render() {
    return (
      <div className={styles.center}>
        <div className={styles.container}>
        {this.getAllTodos()}
        </div>
      </div>
    );
  }
}
 
export default ToDoList;