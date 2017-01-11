import React, {Component} from 'react';
import { login, setNextPath } from '../auth';
import './Login.css';

class Login extends Component {
  
  componentWillMount() {
    this.login = login(this.props.redirect, this.context.router);
  }

  componentWillUnmount() {
    this.login.hide();
    this.login = null;
  }

  render() {
    return (
      <div className="Login">
        <a className="Login-loginButton" onClick={() => login()}>Log In with Auth0</a>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object
}

export default Login;
