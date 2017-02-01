var  React=require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault(); //prevents page from reloading because we want to rpocess it with react
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0){
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    }else{
      this.refs.todoText.focus();
    }
  },
  render: function() {
      return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type='text' ref='todoText' placeholder='input your todo' />
              <button className="button expanded">Add Todo</button>
            </form>

        </div>
      )
  }
});

module.exports = AddTodo;
