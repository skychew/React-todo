import React from 'react';
import {Route,Router,IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase';

//why is these middlewares
var requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser){
    replace('/');
  }else{
    console.log(`currentuser:${firebase.auth().currentUser}` )
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser){
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
