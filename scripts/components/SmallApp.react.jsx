var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('../components/Header.react.jsx');
var SessionStore = require('..stores/SessionStore.react.jsx');
var RouteStore = require('../stores/RouteStore.react.jsx');

function getStateFromStores() {
  return {
    isLoggedIn: SessionStore.isLoggedIn(),
    email: SessionStore.getEmail()
  };
}
var SmallApp = React.createClass({
  //state of app when component initialized
  getInitialState: function(){
    return getStateFromStores();
  },

  componentDidMount: function() {
    SessionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SessionStore.removeChangeListener(this._onChange);
  },

  //state of app when component when SessionStore emits a new change
  //possible since app registered callback in componentDidMount
  _onChange: function() {
    this.setState(getStateFromStores());
  },

  // renders header and mounts content provided by router
  render: function() {
    return (
      <div className="app">
        <Header
          isLoggedIn={this.state.isLoggedIn}
          email={this.state.email} />
        <RouteHandler/>
      </div>    
      );
  }
});

module.exports = SmallApp;