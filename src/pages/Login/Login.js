import React, { Component } from 'react';
import './Login.css';
import openModal from '../../actions/openModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from '../../pages/Login/SignUp';

class Login extends Component {
  submitLogin = () => {};

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.submitLogin}>
          <button className="facebook-login">Connect with Facebook</button>
          <button className="google-login">Connect with Google</button>
          <div className="login-or center">
            <span>or</span>
            <div className="or-divider"></div>
            <input
              type="text"
              className="browser-default"
              placeholder="Email addres"
            />
            <input
              type="password"
              className="browser-default"
              placeholder="Password"
            />
            <button className="sign-up-button">Login</button>
            <div className="divider"></div>
            <div>
              Don't have an account?{' '}
              <span
                onClick={() => {
                  this.props.openModal('open', <SignUp />);
                }}
              >
                Sign up
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators(
    {
      openModal: openModal,
    },
    dispatcher
  );
}

export default connect(null, mapDispatchToProps)(Login);
