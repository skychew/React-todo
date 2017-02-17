var  React=require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault(); //prevents page from reloading because we want to rpocess it with react
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0){
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    }else{
      this.refs.todoText.focus();
    }
  },
  render: function() {
      return(
        <div className ="container__footer">
            <form onSubmit={this.handleSubmit}>
                <input type='text' ref='todoText' placeholder='input your todo' />
              <button className="button expanded">Add Todo</button>
            </form>

        </div>
      )
  }
});

export default connect()(AddTodo);
