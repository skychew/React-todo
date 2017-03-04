import React from 'react';
import * as Redux from 'react-redux';//need this to get dispatch

import * as actions from 'actions';
var path = require('path');
var reactLogo = require('public/img/GHUCL-logo.png');

import fagoogle from 'node_modules/react-icons/fa/google';
import fafacebook from 'node_modules/react-icons/fa/facebook';

export var Login = React.createClass({
/*
  onFirebaseLogin(){
    var {dispatch} = this.props;
    dispatch(actions.startLogin("github"));
  },
*/
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
        <section className="single-form-container container__login">
          <div className="single-form-wrapper row">
            <div className="col-3 col-medium-4 col-small-10 centered">
              <form method="post" action="">
                <input type="hidden" name="csrf_token" value=""/>

                <input type="hidden" name="next" value="/feed"/>

                <div className="form-header center">

                  <a id="logo-icon" className="loginIcon" href="/"><img src={reactLogo} width="80px"/></a>

                  <h1 className="title-login">ULTIMATE GROWTH HACKING CHECKLIST</h1>
                </div>
                <div className="form-content">
                  <div className="social-login buttonSet--vertical">
                      <button className="button2 button--signin button--facebook" onClick={this.onFacebookLogin}>
                        <span className="svgIcon--25 u-textColorTransparentWhiteDark">{React.createElement(fafacebook, null)}</span>
                        <span className="button-label u-textColorTransparentWhiteDark">Continue with Facebook</span>
                      </button>
                      <button className="button2 button--signin button--google" onClick={this.onGoogleLogin}>
                        <span className="svgIcon--25">{React.createElement(fagoogle, null)}</span>
                        <span className="button-label">Continue with Google</span>
                      </button>
                    </div>
                </div>
                <div className="form-divider">
                  <span className="form-divider-span">or</span>
                </div>

                <div className="form-content">
                  <ul className="ulnostyle">
                    <li>
                      <label className="label-login" htmlFor="id_identification">Username or email</label>
                      <input className="really noshadow" type="text" name="identification" tabIndex="1" autoComplete="off"/>

                    </li>
                    <li>
                      <p className="small pull-right"><a href="/password/reset">Forgot?</a></p>
                      <label htmlFor="id_password">Password</label>
                      <input className="really noshadow" type="password" name="password" tabIndex="2"  autoComplete="off"/>

                    </li>
                  </ul>
                </div>
                <div className="form-footer">
                  <button type="submit">Log in</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
});


export default Redux.connect()(Login);
