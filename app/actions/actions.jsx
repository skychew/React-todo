import moment from 'moment';

import firebase, {firebaseRef, githubProvider, facebookProvider, googleProvider } from 'app/firebase/';

export var setSearchText = (searchText)=>{
  return{
    type:'SET_SEARCH_TEXT',
    searchText
  };
};
// text:text can be replaced with just text
export var toggleShowCompleted = () => {
  return{
    type:'TOGGLE_SHOW_COMPLETED',
  };
};

export var addTodo = (todo) => {
  return{
    type:'ADD_TODO',
    todo
  }
}

export var startAddTodo = (text) =>{
  //add to firebase
  return (dispatch,getState) => {
    var todo = {
      text:text, //es5 xyntax
      completed:false,
      createdAt:moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    //after firebase is done ..
    return todoRef.then(()=>{
      dispatch(addTodo({
        ...todo,
        id:todoRef.key
      }))
    });
  };
};

export var addTodos = (todos) =>{
  return{
      type:'ADD_TODOS',
      todos:todos //can also be written like this non es6 format
  };
};

export var startAddTodos = () => {
  return(dispatch,getState) => {
    var todosRef = firebaseRef.child('todos');

    return todosRef.once('value').then((snapshot)=>{
      var todos = snapshot.val() || {};
      var parsedTodos = [];

      Object.keys(todos).forEach((todoId)=>{
        parsedTodos.push({
          id:todoId,
          ...todos[todoId]
        });
      });

      dispatch(addTodos(parsedTodos));
    });
  };
};

export var updateTodo = (id, updates) => {
  return{
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

// null could change to 0 completedAt
export var startToggleTodo = (id, completed) => {
  return(dispatch,getState) => {
    var todoRef = firebaseRef.child('todos/' + id);//es6 `todos/${id}` note (`)
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(()=>{ //promise
      dispatch(updateTodo(id,updates));
    });
  };
};

export var startLogin = (loginType) => {
  return (dispatch, getState) => {
    switch(loginType){
      case 'github':
        var loginProvider = githubProvider;
        break;
      case 'facebook':
        var loginProvider = facebookProvider;
        break;
      case 'google':
        var loginProvider = googleProvider;
        break;
      default:
          var loginProvider = 'undefined';
    };
    return firebase.auth().signInWithPopup(loginProvider).then((result) => {
      console.log(`${loginType} Auth worked!`,result);
    },(error)=>{
      console.log(`${loginType} Unable to auth`,error);
    });
  };
};

export var startLogout = () =>{
  return (dispatch,getState) => {
    return firebase.auth().signOut().then((result) =>{
      console.log('Logged out');
    },(error)=>{
      console.log('log out error');
    });
  };
};
