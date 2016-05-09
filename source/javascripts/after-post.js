(function($){

  // remove and clean-up basecamp figure link
  $('.attachment__size').remove();
  $('.attachment__link.unstyled').each(function(){
    var text = $(this).text();
    $(this).parents('figcaption').text(text);
    $(this).replaceWith($(this).find('img'));
  });


  // header link
  $(function() {
    return $("h2, h3, h4, h5, h6").each(function(i, el) {
      var $el, icon, id;
      $el = $(el);
      id = $el.attr('id');
      icon = '<i>#</i>';
      if (id) {
        return $el.append($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
      }
    });
  });

  // generate paragraph hash
  $(function() {
    $('#main-content').find('p').each(function(){
      var content = $(this).text();
      var hash = MD5(content);
      $(this).attr('data-hash', hash);
    });

    // show hash comment
    var uid = (new UserData()).uid();
    var allNotesRef = (new UserData()).firebaseRef('notes/' + uid);

    allNotesRef.once('value', function(snapshot){
      notes = snapshot.val();

      // show a comment box to every paragraph
      $('#main-content').find('p').each(function(){
        $(this).prepend("<a href='#add-note' class='add-note-button' title='Add Note'>+</a><div class='comment-box'><textarea name='" + $(this).data('hash') + "'></textarea><button>Save</button><a href='#cancel' title='Cancel add note' class='cancel-note-button'>Cancel</a></div>");

        var p = $(this);

        // handle show add-note
        $(this).find('.add-note-button').click(function(){
          p.find('.comment-box').show();
          return false;
        });
        $(this).find('.cancel-note-button').click(function() {
          p.find('.comment-box').hide();
          return false;
        });

        // handle save note.
        $(this).find('button').click(function(){
          console.log('h1111');
          var content = $(this).parent().find('textarea').val();
          var hash = p.data('hash');
          var ref = allNotesRef.child(hash);

          // hide comment box
          p.find('.comment-box').hide();

          if (content.length === 0) {
            // delete data if exists
            if (p.find('span.note').length > 0) {
              ref.remove();
              p.find('span.note').remove();
            }

            return;
          }

          ref.set({
            is_private: true,
            note: content,
            path: window.location.pathname
          });

          // also attach comment to paragraph.
          if (p.find('span.note').length > 0) {
            p.find('span.note').text(content);
          } else {
            p.prepend("<span class='note'>" + content + "</span>");
          }
        });
      });

      // attach mateched notes to paragraph
      for(hash in notes) {
        var note = notes[hash];
        $('[data-hash=' + hash + ']').prepend("<span class='note'>" + note.note + "</span>");
        $('textarea[name=' + hash + ']').val(note.note);
      }

    });



  });



  // current course, title and site-map
  if (currentCourse === undefined) {
    $('aside.toc').hide();
    $('.course-page').addClass('no-aside');
    $('header').addClass('no-aside');
  } else {
    var jsonURL = "/courses/" + currentCourse.replace(/\s/g,'-').toLowerCase() + ".json";
    $.getJSON(jsonURL, function(data){

      var next = undefined;
      var hasFoundCurrent = undefined;

      $.each(data.links, function(){
        var clone = $('.template li').clone();
        clone.find('.card-icon').html(this.icon);
        clone.find('a').attr('href', this.url).text(this.title);

        // next
        if (hasFoundCurrent && next===undefined) {
          next = this;
          // inject "next" link
          var link = $("<a>");
          link.text("Next → " + next.title);
          link.attr('href', next.url);
          $('#post').append(link);
        }

        // current
        if (this.title === currentTitle) {
          clone.addClass('active');
          hasFoundCurrent = true;
        }


        $('#toc').append(clone);
      });
    });
  }



}).call(this, jQuery);
