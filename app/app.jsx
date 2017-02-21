var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');//es6 destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp'); // check webpack config because its been told to find in app components
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';

/* //store in local storage
store.subscribe(()=>{
  var state = store.getState();
  console.log('New state',state);
  TodoAPI.setTodos(state.todos);
});
//extract from local storage
var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));
*/
/* Presets
store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());
*/

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
