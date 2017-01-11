import React, {Component} from 'react';
import { Link, Match, Redirect } from 'react-router';

import { isLoggedIn, logout } from '../auth';

import Home from './Home';
import Login from './Login';
import EditProfile from './EditProfile';
import logo from '../logo.svg';

class App extends Component {
  
  constructor(props){
    super (props);
    this.goLogout.bind(this);
  }
  
  goLogout(e) {
    e.preventDefault()
    logout(this.context.router);
  }
  
  
  render() {
    return (
        <div className="Site">
          <div className="Site-header">
            <img src={logo} className="Site-logo" alt="logo" />
            <h2>Welcome to React + Auth0</h2>
            
            <div className="ui container">
              <div className="ui four item menu">
                <Link className="item" activeClassName="active" activeOnlyWhenExact to="/">Home</Link>
                {/*<Link className="item" activeClassName="active" activeOnlyWhenExact to="/games">Games</Link>*/}
                {/*<Link className="item" activeClassName="active" activeOnlyWhenExact to="/games/new">Add New Game</Link>*/}
  
                <Link className="item" activeClassName="active" activeOnlyWhenExact to="/login">Login</Link>
                <Link className="item" activeClassName="active" activeOnlyWhenExact to="/profile/edit">Profile</Link>
                <a className="item" onClick={(e) => this.goLogout(e)}>Log Out</a>

              </div>
            </div>
          </div>
          {/*<!-- end Site-header -->*/}
            
          <div className="Site-page">
            <Match exactly pattern="/" component={Home} />
            
            {/* after logging in, we need to redirect to a default page */}
            <Match pattern="/login" render={() => (
              isLoggedIn() ? (
                  <Redirect to="/" />
                ) : (
                  <Login redirect="profile/edit"/>
                )
            )}/>
  
  
            {/*
             TODO this route needs to be protected
             Does this mechanism work on groups/nesting? Or is there a
             need for a declaration on each Match?
             */}
            <Match pattern="/profile/edit" render={() => (
              isLoggedIn() ? (
                <EditProfile />
                ) : (
                  <Redirect to={{
                    pathname: '/login',
                    state: { referrer: '/profile/edit' }
                  }} />
                )
            )}/>
            
            
          </div>
          
        </div>// <!-- end Site -->
        
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App;

