import React from 'react';
import * as Redux from 'react-redux';//need this to get dispatch

import * as actions from 'actions';

export var Login = React.createClass({
  onFirebaseLogin(){
    var {dispatch} = this.props;
    dispatch(actions.startLogin("github"));
  },
  onFacebookLogin(){
    var {dispatch} = this.props;
    dispatch(actions.startLogin("facebook"));
  },
  onGoogleLogin(){
    var {dispatch} = this.props;
    dispatch(actions.startLogin("google"));
  },
  render(){
    return(
      <div>
        <h1 className="page-title">Growth Hacking Ultimate Check List</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login/Register with GitHub account below.
              </p>
              <button className="button" onClick={this.onFirebaseLogin}>Login With Github</button><br></br>
              <button className="button" onClick={this.onFacebookLogin}>Login With Facebook</button>
              <button className="button" onClick={this.onGoogleLogin}>Login With Google+</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
});


export default Redux.connect()(Login);
