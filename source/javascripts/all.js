//= require global
//= require_tree .





$('#error-message').click(function(){
  $(this).text('');
});


function moveFbRecord(oldRef, newRef) {
  oldRef.once('value', function(snap)  {
      newRef.set( snap.val(), function(error) {
           if( !error ) {  oldRef.remove(); }
           else if( typeof(console) !== 'undefined' && console.error ) {  console.error(error); }
      });
  });
}




