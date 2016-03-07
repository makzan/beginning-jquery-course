(function(){
  window.authRef = new Firebase('https://teaching.firebaseio.com/');
  window.user = authRef.getAuth();

  window.userInfo = undefined;

  window.setUserInfo = function(name, email, uid) {
    window.userInfo = window.userInfo || {};
    if (name !== null) window.userInfo.displayName = name;
    if (email !== null) window.userInfo.email = email;
    if (uid !== null) window.userInfo.uid = uid;

    localStorage["userInfo"] = JSON.stringify(userInfo);

    var userInfoRef = new Firebase(global.fburl + 'users/' + userInfo.uid);
    userInfoRef.set(window.userInfo);
  };
  window.getUserInfo = function() {
    var userInfoRef = new Firebase(global.fburl + 'users/' + user.uid);
    userInfoRef.on('value', function(snapshot){
      userInfo = snapshot.val();
      userInfo.uid = user.uid;

      console.log("Fetched userInfo:", userInfo);

      localStorage["userInfo"] = JSON.stringify(userInfo);

    });
  }


  // read user info
  if (localStorage["userInfo"] !== undefined) {
    userInfo = JSON.parse(localStorage["userInfo"]);
  }

  if (user !== null) {
    getUserInfo();
  }



})();