var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function(){
      var {id, text, completed, createdAt, completedAt} = this.props;// get from props using es6 and allow to be used below.
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
            this.props.onToggle(id);
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

module.exports = Todo;
