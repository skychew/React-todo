var React = require('react');

var Todo = React.createClass({
  render: function(){
      var {id, text, completed} = this.props;// get from props using es6 and allow to be used below.
      return(
        <div onClick={ ()=> {// could just create a method in create class and send the value down
            this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        {text}
        </div>
      )
  }
});

module.exports = Todo;
