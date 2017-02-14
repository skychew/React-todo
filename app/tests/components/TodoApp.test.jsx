var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require ('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', ()=> {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddtodo',() => {
    var todoText = 'testing addtodo';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({ todos:[] });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handletoggle called',()=>{
    var todoData = {
      id:11,
      text:'Test Features',
      completed:false,
      createdAt:0,
      completedAt:undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    //assertion - check that the todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    //call handle toggle with 11
    todoApp.handleToggle(11);
    //assertion
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle todo from completed to incompleted',()=>{
    var todoData = {
      id:11,
      text:'Test Features',
      completed:true,
      createdAt:0,
      completedAt:123
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    //assertion - check that the todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(true)
    todoApp.handleToggle(11);
    //assertion
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

});
