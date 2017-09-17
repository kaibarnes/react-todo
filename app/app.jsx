import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import { addTodos } from 'actions';
import TodoAPI from 'TodoAPI';
const store = require('configureStore').configure();

store.subscribe(() => {
  const state = store.getState();
  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));

// Load foundation
$(document).foundation();

// App css
require("style!css!sass!applicationStyles")

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("app")
);
