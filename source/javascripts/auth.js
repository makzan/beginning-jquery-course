(function(){
  window.authRef = new Firebase('https://teaching.firebaseio.com/');
  window.user = authRef.getAuth();


})();