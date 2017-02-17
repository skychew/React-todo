import * as redux from 'redux';
import thunk from 'redux-thunk';
import {searchTextReducer,showCompletedReducer,todosReducer} from 'reducers';

export var configure = (initialState={}) => {
  var reducer = redux.combineReducers({
    searchText:searchTextReducer,
    showCompleted:showCompletedReducer,
    todos:todosReducer
  });
//window.devToolsExtension .. is for chrome redux developer console
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
