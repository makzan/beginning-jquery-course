---
cid: 16
date: 2016-03-15
title: Lecture 4—AJAX and getJSON
tags: lecture, jquery
icon: notes
---

<p>{% if subscriber.first_name != blank %}<br>Hi {{ subscriber.first_name }},<br>{% else %}<br>Hello,<br>{% endif %}<br>
</p>
<p>This is lecture 4 of Beginning jQuery course. In this lecture, we explore how to query data from network.
</p>
<h2>What is AJAX?</h2>
<p>AJAX stands for <em>Asynchronous JavaScript and XML</em>.
</p>
<p>It is a concept that uses JavaScript and XML to send server request and get response in an asynchronous way that happens in web browser.
</p>
<p>Nowadays we replaced the XML part with JSON. But the concept is the same.
</p>
<p>Instead of browser that calls the request, AJAX uses JavaScript to trigger a request from client-side to server.
</p>
<p>On the server-side, the server determines the request as JSON request, often by checking the content type. Then server returns JSON formatted content instead of normal HTML.
</p>
<p>The JavaScript logic, which triggers the request, then manipulates and constructs the HTML based on the returned data.
</p>
<p>The following graph shows the difference between normal browser request and an AJAX request. When the page loads page 2, the AJAX only changes what’s difference and keep the other part (which part) unchanged.
</p>
<p><img src="https://dl.dropboxusercontent.com/u/3079250/Public%20for%20Beginning%20jQuery/ajax-refresh.png" alt="AJAX-refreshing">
</p>
<h2>JavaScript Object Notation</h2>
<p>We use JSON a lot nowadays. <a href="http://json.org/">JSON</a> stands for <em>JavaScript Object Notation</em>. It’s designed as a lightweight data interchange format that’s easy for reading and writing by both human and computer.
</p>
<h2>API from some web services</h2>
<p>You’ll need API end points to test the jQuery’s AJAX functions. Here are few of them.
</p>
<h3>Open Weather</h3>
<p>Open Weather allows us to query weather detail of specify city.
</p>
<p><a href="http://openweathermap.org/api">http://openweathermap.org/api</a>
</p>
<h3>Open Exchange Rate</h3>
<p>I have written an example of using the API of Open Exchange Rate in my course “Mobile web app development with PhoneGap”, which you can find it in the following URL.
</p>
<p><a href="http://makzan.net/mobile-web-app-dev-with-phonegap/exchange-rate-2-api/">http://makzan.net/mobile-web-app-dev-with-phonegap/exchange-rate-2-api/</a>
</p>
<p>I have created a test-only token which you can find in the following link. Please note that the token should be only used in this course and I will revoke the token later.
</p>
<p><a href="http://mak.la/exchange-rate-token">http://mak.la/exchange-rate-token</a>
</p>
<h3>Dribbble</h3>
<p><a href="http://developer.dribbble.com/v1/">http://developer.dribbble.com/v1/</a>
</p>
<p>I have created a testing-only application which you may use to try fetching some dribbble shots into your jQuery project.
</p>
<p><a href="http://mak.la/dribbble-token">http://mak.la/dribbble-token</a>
</p>
<p>Note: This token should be exclusively used in this course only. I may revoke the token from time to time, please let me know if you face issue using the test-only token.
</p>
<h3>Facebook Graph API</h3>
<p>The base of the API is <code>&lt;a href="https://graph.facebook.com"&gt;https://graph.facebook.com&lt;/a&gt;</code>.
</p>
<ul>
	<li>for page:</li>
</ul>
<p><a href="https://graph.facebook.com/makzan">https://graph.facebook.com/makzan</a>
</p>
<ul>
	<li>for user profile:</li>
</ul>
<p><a href="https://graph.facebook.com/maksenghin">https://graph.facebook.com/maksenghin</a>
</p>
<p>The expression of Facebook Graph API is usually like the following:
</p>
<pre>/objectID/
/objectID/collections
</pre>
<p>Here are some of the examples:
</p>
<pre>/pageID/albums
/albumID/photos
/pageID/likes
/photoID/comments
</pre>
<p>Take my Facebook page as an example:
</p>
<p>The following URL shows the albums list of makzan’s page.
</p>
<pre>https://graph.facebook.com/makzan/albums
</pre>
<p>From the album list, we can know detail of each album, including the album ID. By querying that ID, we can get basic information about this album.
</p>
<pre>https://graph.facebook.com/277532299119410
</pre>
<p>The following URL shows the photos inside this particular album.
</p>
<pre>https://graph.facebook.com/277532299119410/photos
</pre>
<h2>getJSON</h2>
<pre>$.getJSON(url, callback);
</pre>
<p><a href="http://api.jquery.com/jQuery.getJSON/">http://api.jquery.com/jQuery.getJSON/</a>
</p>
<p>which is actually a short hand of:
</p>
<pre>$.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});
</pre>
<p>All the short hand methods:
</p>
<ul>
	<li>get</li>
	<li>getJSON</li>
	<li>getScript</li>
	<li>post</li>
	<li>load</li>
</ul>
<p><a href="http://api.jquery.com/category/ajax/shorthand-methods/">http://api.jquery.com/category/ajax/shorthand-methods/</a>
</p>
<h2>jQuery.ajax</h2>
<p>The <code>$.ajax</code> is the magic behind all these handy methods
</p>
<p><a href="http://api.jquery.com/jQuery.ajax/">http://api.jquery.com/jQuery.ajax/</a>
</p>
<p>Eventually jQuery.ajax uses the browser’s XMLHttpRequest method to trigger a request without refreshing the browser.
</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest</a>
</p>
<h2>JSON-P</h2>
<p>JSON-P stands for <em>JSON with padding</em>.
</p>
<p>JavaScript is powerful. But JavaScript cannot do everything. There is strict restriction when executing JavaScript that access data beyond its own domain.
</p>
<p>We restrict this by domain because usually it’s the same owner that write code on the same domain. And we don’t want script to access data that’s not belongs to its domain.
</p>
<p>But when querying data cross domain, we need to actually access data that’s not on the same domain. The method of JSON with padding solves this issue by making the server generated data calls a custom function in the client-side. The following site shows a detail explanation and example.
</p>
<p><a href="http://json-p.org/">http://json-p.org</a>
</p>
<h2>Inspecting the responses</h2>
<pre>$.getJSON(url, function(data){
  console.log(data);
});
</pre>
<p>Usually we want to inspect the returned data before we know how to make use of the API.
</p>
<p>The console logging can show the returned data in browser’s console. There are also browser extensions that formats JSON responses. In Mac, I use <a href="http://www.helloresolven.com/portfolio/rested/">RESTed</a> app and <a href="https://luckymarmot.com/paw">Paw</a> app.
</p>
<h2>Manipulating DOM elements</h2>
<p>After we fetched the data from network, usually we need to construct the view, which is usually a couple of HTML tags and images.
</p>
<p>If the request is a collection of resources, we usually use a loop to iterate each data object. On each object, we use the data to construct the HTML view.
</p>
<p>We make use of the handy jQuery methods to manipualte HTML DOM elements. For example, we can use <a href="http://api.jquery.com/clone/"><code>clone</code></a> to clone elements for a collection of items. We can use <a href="http://api.jquery.com/text/"><code>text</code></a> to change text content based on the fetch data and <code>prop</code> to change image sources for the img tag.
</p>
<p>We may need <a href="http://api.jquery.com/empty/"><code>empty</code></a> or <a href="http://api.jquery.com/remove/"><code>remove</code></a> to clear existing elements on AJAX refresh. We may also need to use the <a href="http://api.jquery.com/append/"><code>append</code></a> and <a href="http://api.jquery.com/prepend/"><code>prepend</code></a> method to incrementally show more content to our readers.
</p>
<h2>Summary</h2>
<p>We went through the concept of loading data asynchronously with JavaScript. We also went through the techniques we use to make use of the requests and responses.
</p>
<p><img src="http://mak.la/signature" width="121" height="54" style="width: 121px; height: 54px;"></p>
<p>–Thomas Mak
</p>