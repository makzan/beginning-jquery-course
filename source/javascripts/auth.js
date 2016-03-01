(function(){
  var ref = new Firebase('https://teaching.firebaseio.com/jQuery/mentor-chats/' + emailSlug + '/');
  var user = ref.getAuth();
})();