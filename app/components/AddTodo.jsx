import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'actions';

export class AddTodo extends Component{
  constructor(props){
    super(props);

    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      this.refs.todoText.value = "";
      dispatch(addTodo(todoText));
    }else{
      this.refs.todoText.focus();
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form onSubmit={ this.handleSubmit }>
          <input ref="todoText" type="text" placeholder="What do you need to do"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
};

export default connect()(AddTodo);
