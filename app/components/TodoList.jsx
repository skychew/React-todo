var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length===0){
        return(
          <p className="container__message">No Lists</p>
        );
      }
      return todos.map((todo) => {
        return(
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>//... spread operator takes every property from map todo like id and text and passes it down to todo as props
        )
      });
    };
      return(
        <div>
          {renderTodos()}
        </div>
      )
  }
});

module.exports = TodoList;
