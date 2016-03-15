---
cid: 16
date: 2016-03-15
title: Lecture 5—jQuery plugins
tags: lecture, jquery
icon: notes
---


<p>{% if subscriber.first_name != blank %}<br>Hi {{ subscriber.first_name }},<br>{% else %}<br>Hello,<br>{% endif %}<br>
</p>
<p>This is lecture 5 of Beginning jQuery course. In this lecture, we explore how to use jQuery plugin.
</p>
<h2>Creating our own jQuery plugin</h2>
<p>The jQuery’s learning center provides a solid tutorial on creating plugin:
</p>
<p><a href="https://learn.jquery.com/plugins/basic-plugin-creation/">https://learn.jquery.com/plugins/basic-plugin-creation/</a>
</p>
<p>Here are the key points for a plugin:
</p>
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
<p>When to use options object?
</p>
<p>We can accept options as an object instead of taking comma-separated parameters. This is usually a more flexible way. It allows accepting many options without certain order. It also allow skipping options to use default plugin’s option value.
</p>
<h3>Example—Creating our slideshow plugin</h3>
<p><img src="https://dl.dropboxusercontent.com/u/3079250/Public%20for%20Beginning%20jQuery/slideshow.png" alt="slideshow image">
</p>
<p>We will use our slideshow code in our previous lab to demonstrate the plugin creation. The original code was in the following URL:
</p>
<p><a href="http://codepen.io/makzan/pen/Pwyxbw">http://codepen.io/makzan/pen/Pwyxbw</a>
</p>
<p>1) The first step would be putting all the existing jQuery slideshow code into a plugin scope.
</p>
<pre>$.fn.makeSlideshow = function(options) {
  // get all images
  var images = $(this).find('li');
  // existing slideshow code.
  // jQuery plugin’s practice: return this.
  return this;
};
</pre>
<p>Then we call our plugin by the following code:
</p>
<pre>$('#slideshow').makeSlideshow();
</pre>
<p>2) Assuming now we want to add additional options. For instance, allowing user to customize theme option and slideshow interval.
</p>
<pre>$.fn.makeSlideshow = function(options) {
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
</pre>
<p>We can now call our slideshow plugin with options.
</p>
<pre>$('#slideshow').makeSlideshow({
  theme: 'theme-b',
  interval: 1000
});
</pre>
<p>You may find the final code example in the following URL. It also includes ‘theme-a’ and ‘theme-b’ defined in the CSS style.
</p>
<p><a href="http://codepen.io/makzan/pen/RPbzKz">http://codepen.io/makzan/pen/RPbzKz</a>
</p>
<h2>jQuery UI plugin</h2>
<p><img src="https://dl.dropboxusercontent.com/u/3079250/Public%20for%20Beginning%20jQuery/datepicker.png" alt="datepicker">
</p>
<p><a href="http://jqueryui.com/">jQuery UI</a> provides a collection of common interactions and widgets that we need when building web application. It includes handy tools such as <a href="http://jqueryui.com/draggable/">dragging</a>, <a href="http://jqueryui.com/sortable/">sorting</a> and <a href="http://jqueryui.com/datepicker/">date picker</a>.
</p>
<p>Here is a code demonstrating how we use sortable in real-world project. In this example code, which I extracted from my client project, the server-side renders a list of content and lets client-side re-ordering the list. The new order is then sent to server to save into database by using jQuery’s ajax post.
</p>
<pre>&lt;div id='sortable'&gt;
  &lt;%- @notes.order('rank').each do |note| %&gt;
    &lt;div class='note' data-note-id='&lt;%= note.id %&gt;'&gt;
      &lt;div class='dragging-area'&gt;☰&lt;/div&gt;
      &lt;%= note.content %&gt;
    &lt;/div&gt;
  &lt;%- end %&gt;
&lt;/div&gt;
</pre>
<p>And the JavaScript that enable the sorting and posts new orders to server:
</p>
<pre>$('#sortable').sortable({
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
</pre>
<p>Please note that the code contains server-side script (Ruby) and it probably doesn’t work in your browser without a server running. The purpose of the code is to demonstrate how it works.
</p>
<h2>jQuery mobile plugin</h2>
<p><a href="http://jquerymobile.com/">jQuery mobile</a> is a plugin that makes website act like a mobile app. It contain a large set of functions that mimics mobile application components and interactions by using jQuery and CSS styles. For example, it shows one page per view and comes with different <a href="http://makzan.net/mobile-web-app-dev-with-phonegap/transition/">page transition effects</a>.
</p>
<p>I created a <a href="http://makzan.net/mobile-web-app-dev-with-phonegap/">course dedicated for using jQuery mobile to create mobile web application</a> which is free for online reading. If you need to to create mobile web application, this is a good starting point.
</p>
<h2>Other 3rd party plugins</h2>
<p>Here I list some 3rd party jQuery plugins that I find useful when building websites.
</p>
<ol>
	<li><a href="http://scrollme.nckprsn.com/">ScrollMe</a>: Allow slightly adding effects when readers scroll. This plugin encourages subtle changes on scroll instead of those crazy scrolljacking websites. (I hate scrolljacking and this is not.)</li>
	<li><a href="http://miguel-perez.github.io/smoothState.js/">SmoothStates</a>: Adding smooth page transitions to existing web pages in [unobtrusive way].</li>
	<li><a href="http://brm.io/jquery-match-height/">MatchHeight</a>: Usually we need JavaScript to equal the height of certain elements. (CSS can’t do that)</li>
	<li><a href="http://dense.rah.pw/">Dense</a>: Easy serving retina images.</li>
	<li><a href="http://fntneves.github.io/jquery-labelauty/">Labelauty</a>: Lightweight tool to make checkboxes and radio buttons beautiful. </li>
	<li><a href="http://kenwheeler.github.io/slick/">Slick</a>: A good carousel slider.</li>
</ol>
<h1>Course Summary</h1>
<p>We have learned a lot in this <strong>Beginning jQuery</strong> course.
</p>
<ul>
	<li>We learned how jQuery makes use of powerful selector patters to let us apply command to specific DOM elements. </li>
	<li>We learned the power of class toggling combining with CSS class definitions.</li>
	<li>We learned to handle different events to create interactive web pages.</li>
	<li>We learned to query Internet resources by using it’s very handy <code>getJSON</code> method.</li>
	<li>We learned to use plugins to enhance our web pages in elegant way.</li>
	<li>We built tab panels by using basic jQuery show/hide, which is very useful and common action.</li>
	<li>We built a image slideshow that allow animation in different themes.</li>
	<li>We built a simple todo-list that manipulate DOM elements with every thing we learned in this course.</li>
	<li>Finally we create own own plugins to let us reuse and share our own jQuery work.</li>
</ul>
<p><img src="http://mak.la/signature" width="121" height="54" style="width: 121px; height: 54px;">
</p>
<p>–Thomas Mak
</p>