var SmallConstants = require('../constants/SmallConstants.js');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var PayloadSources = SmallConstants.PayloadSources;

//We use 2 methods to dispatch messages
var SmallAppDispatcher = assign(new Dispatcher(), {

  //handles dispatch of server-initiated actions
  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  //handles dispatch of view-initiated actions
  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }
});

module.exports = SmallAppDispatcher;

