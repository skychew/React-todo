var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state='',action) => {
  //action.something = 2; this will be detected by deepfreeze as pure functions should not edit this.
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };

};
export var showCompletedReducer = (state=false,action) =>{
  switch(action.type){
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export var todosReducer = (state=[],action) =>{
  switch(action.type){
    case 'ADD_TODO':
      return[
        ...state,
        action.todo
      ];
    case 'UPDATE_TODO':
      return state.map((todo)=>{
        if(todo.id === action.id){
          //if you use one spread operator after the other everything from the second one will overwrite the first one.
          return{
            ...todo,
            ...action.updates
          };
        } else{
          return todo;
        }
      });
    case 'ADD_TODOS':
      return[
        ...state,
        ...action.todos
      ];
    default:
      return state;
  };
};

export var authReducer = (state={}, action) => {
  switch(action.type){
    case 'LOGIN':
      return {
        uid:action.uid
      };
    case 'LOGOUT':
      return{};
    default:
      return state;
  };
};
