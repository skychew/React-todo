var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function(){
    var {todos,showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if (todos.length===0){
        return(
          <p className="container__message">No Lists</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return(
          <Todo key={todo.id}{...todo}/>
        );
      });
      /*
      return todos.map((todo) => {
        return(
          <Todo key={todo.id} {...todo}/>//... spread operator takes every property from map todo like id and text and passes it down to todo as props
        )
      });
      */
    };
      return(
        <div>
          {renderTodos()}
        </div>
      )
  }
});

//todos = state.todos, could return state to retrieved everything
//module.exports =
export default connect(
  (state)=>{
    return state;

  }
)(TodoList);
