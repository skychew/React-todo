var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function(){
      var {id, text, completed, createdAt, completedAt, dispatch} = this.props;// get from props using es6 and allow to be used below.
      var todoClassName = completed ? 'todo todo-completed' :'todo';
      var renderDate = () => {
        var message = 'Created ';
        var timestamp = createdAt;

        if(completed){
          message = 'Completed ';
          timestamp = completedAt;
        }

        return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
      }
      return(
        <div className={todoClassName} onClick={ ()=> {// could just create a method in create class and send the value down
            //this.props.onToggle(id);
            dispatch(actions.startToggleTodo(id,!completed))
          }}>
          <div>
            <input type="checkbox" checked={completed}/>
          </div>
          <div>
            <p>{text}</p>
            <p className="todo__subtext">{renderDate()}</p>
        </div>
        </div>
      )
  }
});

//connect todo component to our store
export default connect()(Todo);
