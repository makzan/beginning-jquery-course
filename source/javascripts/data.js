/* global Firebase */

(function(){
  var UserData = function(){
    // this._name = "Unknown";
    // this._email = undefined;
    // this._uid = undefined;
    this.fburl = 'https://teaching.firebaseio.com/';
  };
  UserData.prototype.firebaseRef = function(relativePath) {
    return (new Firebase(this.fburl + relativePath));
  }
  UserData.prototype.getAuth = function() {
    var authRef = this.firebaseRef('');
    return authRef.getAuth();
  };
  UserData.prototype.email = function(){
    var user = this.getAuth();
    if (user !== null) {
      return user.password.email;
    }
    return undefined;
  };
  UserData.prototype.displayName = function(callback) {
    var user = this.getAuth();

    if (user === null) {
      return null;
    }

    var ref = this.firebaseRef('users/' + user.uid + '/displayName');
    ref.on('value', function(snapshot){
      callback(snapshot.val());
    });
  };
  UserData.prototype.uid = function() {
    var user = this.getAuth();
    if (user !== null) {
      return user.uid;
    }
    return undefined;
  };
  UserData.prototype.saveDisplayName = function(displayName) {
    var user = this.getAuth();
    var ref = this.firebaseRef('users/' + user.uid + '/displayName');
    ref.set(displayName);
  }
  UserData.prototype.saveEmail = function(email) {
    var user = this.getAuth();
    var ref = this.firebaseRef('users/' + user.uid + '/email');
    ref.set(email);
  }

  window.UserData = UserData;

/*
  window.authRef = new Firebase('https://teaching.firebaseio.com/');
  window.user = authRef.getAuth();

  window.userInfo = undefined;

  window.setUserInfo = function(name, email, uid) {
    window.userInfo = window.userInfo || {};


    if (name !== null && name.length > 0) window.userInfo.displayName = name;
    if (email !== null) window.userInfo.email = email;
    if (uid !== null) window.userInfo.uid = uid;

    console.log('setting user info: ', name, email, uid, userInfo);

    localStorage["userInfo"] = JSON.stringify(userInfo);

    var userInfoRef = new Firebase(global.fburl + 'users/' + userInfo.uid);
    userInfoRef.set(window.userInfo);
  };
  window.getUserInfo = function() {
    // local cache
    if (localStorage["userInfo"] !== undefined) {
      userInfo = JSON.parse(localStorage["userInfo"]);
    }

    // remote data
    var userInfoRef = new Firebase(global.fburl + 'users/' + user.uid);
    userInfoRef.on('value', function(snapshot){
      userInfo = snapshot.val();
      userInfo.uid = user.uid;

      console.log("Fetched userInfo:", userInfo);

      localStorage["userInfo"] = JSON.stringify(userInfo);

    });
  }


  if (user !== null) {
    getUserInfo();
  }
*/


})();