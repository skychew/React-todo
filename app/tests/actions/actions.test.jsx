import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions',()=>{
  it('should generate search text action',()=>{
    var action = {
      type:'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });
  it('should generate toggle show completed action',()=>{
    var action = {
      type:"TOGGLE_SHOW_COMPLETED"
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });
  it('should generate add todo action',()=>{
    var action = {
      type : 'ADD_TODO',
      todo: {
        id: 'abc123',
        text:'something todo anything really',
        completed: false,
        createdAt: 19264986
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });
  //lets mocha know this is asynchornous test. Dont stop listening for insertions or error until done
  it('should create todo and dispatch ADD_TODO',(done)=>{
    const store = createMockStore({});
    const todoText = 'MY todo item';
    store.dispatch(actions.startAddTodo(todoText)).then(()=>{
      const actions = store.getActions();//from mockstore
      expect(actions[0]).toInclude({ // as long as there is type add todo it will pass
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text:todoText
      })
      done();
    }).catch(done); // if things go wrong it will catch with error message
  });
  it('should generate add todos action object',()=>{
    var todos = [{
      id:'111',
      text:'anything',
      completed:false,
      completedAt: undefined,
      createdAt:33000
    }];
    var action = {
      type:'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate update todo action',()=>{
    var action = {
      type : 'UPDATE_TODO',
      id : '123',
      updates:{completed:false}
    };
    var res = actions.updateTodo(action.id,action.updates);

    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos',()=>{
    var testTodoRef;

    beforeEach((done)=>{
      var todosRef = firebaseRef.child('todos');

      todosRef.remove().then(()=>{
        testTodoRef = firebaseRef.child('todos').push();

        return testTodoRef.set({
          text: 'Something to do test',
          completed : false,
          createAt: 309750
        })
      })
      .then(()=>done()).catch(done);
    });

    afterEach((done)=>{
      testTodoRef.remove().then(()=>done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action',(done)=>{
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(()=>{
      //true
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
            type: 'UPDATE_TODO',
            id:testTodoRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed:true
        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();
      //false return done with error message
      },done);
    });

    it('should populate todos and dispatch ADD_TODOS', (done)=>{
      const store = createMockStore({});
      const action = actions.startAddTodos();

      store.dispatch(action).then(()=>{
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('Something to do test');

        done();
      }, done)
    });
  });
});
