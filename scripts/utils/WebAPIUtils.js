var ServerActionCreators = require('../actions/ServerActionCreators.react.jsx');
var request = require('superagent');

//no class directly modifies another class state
//Flux says they should instead they just create new actions
module.exports = {

  login: function(email,password){
    request.post('http://localhost:3002/v1/login')
    .send({ username: email, password: password, grant_type: 'password' })
    .set('Accept', 'application/json')
    .end(function(error, res){
      if (res) {
        if (res.error) {
          var errorMsgs = _getErrors(res);
          ServerActionCreators.receiveLogin(null, errorMsgs);
        } else {
          json = JSON.parse(res.text);
          ServerActionCreators.receiveLogin(json, null);
        }
      }
    });
  },
};
