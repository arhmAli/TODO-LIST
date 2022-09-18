import React, { Component } from 'react'
import NewForm from './NewForm';
import TodoItem from './TodoItem';
import './todolist.css'
class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={todos:[]}
        this.create=this.create.bind(this)
        this.remove=this.remove.bind(this)
        this.updateTodo=this.updateTodo.bind(this)
        this.toggleCompletion=this.toggleCompletion.bind(this)
    }
    create(newTodo){
        this.setState({
            todos:[...this.state.todos,newTodo]
        })
    }
    remove(id){
        this.setState({
          todos:this.state.todos.filter(n=>n.id!==id)
        })
    }
    updateTodo(id,updatedTask){
      const updatedTodo=this.state.todos.map(n=>{
        if(n.id===id){
          return{...n,task:updatedTask}
        }
          return n;
      })
      this.setState({
        todos:updatedTodo
      })
    }
    toggleCompletion(id){
      const updatedTodo=this.state.todos.map(n=>{
        if(n.id===id){
          return{...n,completed:!n.completed}
        }
          return n;
      })
      this.setState({
        todos:updatedTodo
      })
    }
  render() {
    const todo=this.state.todos.map(todo=>{
        return <TodoItem 
        key={todo.id} 
        id={todo.id} 
        task={todo.task} 
        completed={todo.completed}
        toggle={this.toggleCompletion}
        removeTodo={this.remove}
        updateTodo={this.updateTodo}/>
    })
    return (
      <div className='todo-div'>
        <h1>TodoList </h1>
        <span>Simple Todo App using React</span>
        <ul>
        {todo}
        </ul>
        <NewForm createTodo={this.create}/>
      </div>
    )
  }
}
export default TodoList;
