import React, { Component } from 'react'
import './todo.css'
export default class TodoItem extends Component {
  constructor(props){
    super(props)
    this.state={isEditing:false,task:this.props.task}
    this.handleRemove=this.handleRemove.bind(this)
    this.toggleForm=this.toggleForm.bind(this);
    this.handleUpdate=this.handleUpdate.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.onToggle=this.onToggle.bind(this)

  }
  handleRemove(){
    this.props.removeTodo(this.props.id)
  }
  handleChange(e){
    this.setState({
        [e.target.name]:e.target.value
    })
}
  toggleForm(){
    this.setState({isEditing:!this.state.isEditing})
  }
  handleUpdate(e){
  e.preventDefault()
  //take new data and pass upto parent i.e todolist
  this.props.updateTodo(this.props.id,this.state.task)
  this.setState({isEditing:false})
  }
  onToggle(e){
    this.props.toggle(this.props.id)
  }
  render() {
    let result;
    if(this.state.isEditing){
      result=(
        <div>
          <form onSubmit={this.handleUpdate}>
            <input 
            type='text'
            name='task'
            value={this.state.task}
            onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      )
    }
    else{
      result=(
        <div>
        
        <li onClick={this.onToggle}
        className={this.props.completed ? 'completed' :''}>{this.props.task}</li>
        <button onClick={this.toggleForm}>Edit</button>
        <button onClick={this.handleRemove}>X</button>
      </div>
    
      )
    }
    return result;
  }
}
