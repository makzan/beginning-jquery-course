---
cid: 17
date: 2016-03-15
title: Lecture 5—jQuery plugins
tags: lecture, jquery
icon: notes
---

This is lecture 5 of Beginning jQuery course. In this lecture, we explore how to use jQuery plugin.


## Creating our own jQuery plugin

The jQuery’s learning center provides a solid tutorial on creating plugin:

<a href="https://learn.jquery.com/plugins/basic-plugin-creation/</a>

Here are the key points for a plugin:

<ol>
<li>Register a plugin:
<pre>$.fn.pluginName = function() {
  // $(this) refers to the selected elements
  return this;
};
</pre></li>
<li>Plugin may take simple parameters:
<pre>$.fn.pluginName = function(param1, param2) {
  // your code goes here.
  return this;
};
</pre></li>
<li>Plugin may take options as an object:
<pre>$.fn.pluginName = function(options) {
  // default settings
  var settings = $.extend({
    foo: ‘bar',
    foo2: 123,
  }, options );
  // your code goes here.
  return this;
};
</pre></li>
</ol>
When to use options object?

We can accept options as an object instead of taking comma-separated parameters. This is usually a more flexible way. It allows accepting many options without certain order. It also allow skipping options to use default plugin’s option value.


### Example—Creating our slideshow plugin

<img src="https://dl.dropboxusercontent.com/u/3079250/Public%20for%20Beginning%20jQuery/slideshow.png" alt="slideshow image">

We will use our slideshow code in our previous lab to demonstrate the plugin creation. The original code was in the following URL:

<a href="http://codepen.io/makzan/pen/Pwyxbw</a>

1) The first step would be putting all the existing jQuery slideshow code into a plugin scope.

~~~
$.fn.makeSlideshow = function(options) {
  // get all images
  var images = $(this).find('li');
  // existing slideshow code.
  // jQuery plugin’s practice: return this.
  return this;
};
~~~

Then we call our plugin by the following code:

~~~
$('#slideshow').makeSlideshow();
~~~

2) Assuming now we want to add additional options. For instance, allowing user to customize theme option and slideshow interval.

~~~
$.fn.makeSlideshow = function(options) {
  // default settings
  var settings = $.extend({
    theme: 'theme-a',
    interval: 3000,
  }, options );
  // apply theme
  $(this)
  .removeClass().addClass('slideshow').addClass(settings.theme);
  setInterval(nextSlide, settings.interval);
  // existing slideshow code goes here.
};
~~~

We can now call our slideshow plugin with options.

<pre>$('#slideshow').makeSlideshow({
  theme: 'theme-b',
  interval: 1000
});
</pre>
You may find the final code example in the following URL. It also includes ‘theme-a’ and ‘theme-b’ defined in the CSS style.

<a href="http://codepen.io/makzan/pen/RPbzKz</a>


## jQuery UI plugin

<img src="https://dl.dropboxusercontent.com/u/3079250/Public%20for%20Beginning%20jQuery/datepicker.png" alt="datepicker">

<a href="http://jqueryui.com/datepicker/">date picker</a>.

Here is a code demonstrating how we use sortable in real-world project. In this example code, which I extracted from my client project, the server-side renders a list of content and lets client-side re-ordering the list. The new order is then sent to server to save into database by using jQuery’s ajax post.


~~~
<div id='sortable'>
  <%- @notes.order('rank').each do |note| %>
    <div class='note' data-note-id='<%= note.id %>'>
      <div class='dragging-area'>☰</div>
      <%= note.content %>
    </div>
  <%- end %>
</div>
~~~

And the JavaScript that enable the sorting and posts new orders to server:

~~~
$('#sortable').sortable({
  handle: '.dragging-area',
  update: function( event, ui ) {
    var array = [];
    $('#sortable').children().each(function(){
      array.push($(this).data('noteId'));
    });
    $.post('/notes/reorder', {new_order:array}, function(data){
      // server-side handles the new order and update the order rank in database.
      console.log(data);
    });
  },
});
~~~

Please note that the code contains server-side script (Ruby) and it probably doesn’t work in your browser without a server running. The purpose of the code is to demonstrate how it works.


## jQuery mobile plugin

<a href="http://makzan.net/mobile-web-app-dev-with-phonegap/transition/">page transition effects</a>.

I created a <a href="http://makzan.net/mobile-web-app-dev-with-phonegap/">course dedicated for using jQuery mobile to create mobile web application</a> which is free for online reading. If you need to to create mobile web application, this is a good starting point.


## Other 3rd party plugins

Here I list some 3rd party jQuery plugins that I find useful when building websites.


- <a href="http://scrollme.nckprsn.com/">ScrollMe</a>: Allow slightly adding effects when readers scroll. This plugin encourages subtle changes on scroll instead of those crazy scrolljacking websites. (I hate scrolljacking and this is not.)
- <a href="http://miguel-perez.github.io/smoothState.js/">SmoothStates</a>: Adding smooth page transitions to existing web pages in [unobtrusive way].
- <a href="http://brm.io/jquery-match-height/">MatchHeight</a>: Usually we need JavaScript to equal the height of certain elements. (CSS can’t do that)
- <a href="http://dense.rah.pw/">Dense</a>: Easy serving retina images.
- <a href="http://fntneves.github.io/jquery-labelauty/">Labelauty</a>: Lightweight tool to make checkboxes and radio buttons beautiful.
- <a href="http://kenwheeler.github.io/slick/">Slick</a>: A good carousel slider.


## Course Summary

We have learned a lot in this <strong>Beginning jQuery</strong> course.


- We learned how jQuery makes use of powerful selector patters to let us apply command to specific DOM elements.
- We learned the power of class toggling combining with CSS class definitions.
- We learned to handle different events to create interactive web pages.
- We learned to query Internet resources by using it’s very handy <code>getJSON</code> method.
- We learned to use plugins to enhance our web pages in elegant way.
- We built tab panels by using basic jQuery show/hide, which is very useful and common action.
- We built a image slideshow that allow animation in different themes.
- We built a simple todo-list that manipulate DOM elements with every thing we learned in this course.
- Finally we create own own plugins to let us reuse and share our own jQuery work.

<p>
<img src="http://mak.la/signature" width="121" height="54" style="width: 121px; height: 54px;"><br>
–Thomas Mak
</p>


