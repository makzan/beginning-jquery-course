(function(){
  window.authRef = new Firebase('https://teaching.firebaseio.com/');
  window.user = authRef.getAuth();

  window.userInfo = undefined;

  // read user info
  if (localStorage["userInfo"] !== undefined) {
    userInfo = JSON.parse(localStorage["userInfo"]);
  }

  if (user !== null) {
    var userInfoRef = new Firebase(global.fburl + 'users/' + user.uid);
    userInfoRef.on('value', function(snapshot){
      userInfo = snapshot.val();

      localStorage["userInfo"] = JSON.stringify(userInfo);

    });
  }

})();