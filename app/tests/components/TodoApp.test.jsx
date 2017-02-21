var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} =  require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require ('expect');
var $ = require('jquery');

var configureStore = require('configureStore');
import {TodoApp} from 'TodoApp';//es6 to get unconnected version
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('should exist', ()=> {
    expect(TodoApp).toExist();
  });
  it('should render Todolist',()=>{
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider,TodoApp)[0]
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp,TodoList);
  });
/* replaced with redux
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
*/
});
