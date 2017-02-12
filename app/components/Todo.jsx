var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function(){
      var {id, text, completed, createdAt, completedAt} = this.props;// get from props using es6 and allow to be used below.
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
        <div onClick={ ()=> {// could just create a method in create class and send the value down
            this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
        </div>
      )
  }
});

module.exports = Todo;
