import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './newForm.css'
export default class NewForm extends Component {
    constructor(props){
        super(props);
        this.state={task:''}
        this.handleChange=this.handleChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.props.createTodo({...this.state,id:uuidv4(),completed:false})
        this.setState({task:''})
    }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor='task'>New-Todo:</label>
        <input 
        type='text'
        id='task'
        name='task'
        placeholder='new todo'
        value={this.state.task}
        onChange={this.handleChange}
        />
        <button className='adding-btn'>ADD TODO</button>
      </form>
    )
  }
}
