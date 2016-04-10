---
cid: 15
date: 2016-03-15
title: Lab 3—getJSON and Todo list
tags: lab, jquery
icon: exercise
---


<p>This is lab 3 for the Beginning jQuery course.
</p>

## More methods on selecting elements

<p>Selecting elements is one of the key feature in jQuery. We can’t apply actions if we can’t select the elements we want. There are many more methods to select certain elements. Here is a list of them. Try to read them all so that you know the method to select your desired elements.
</p>
<ul>
	<li><a href="http://api.jquery.com/children">children</a></li>
	<li><a href="http://api.jquery.com/find">find</a></li>
	<li><a href="http://api.jquery.com/next">next</a></li>
	<li><a href="http://api.jquery.com/prev">prev</a></li>
	<li><a href="http://api.jquery.com/nextAll">nextAll</a></li>
	<li><a href="http://api.jquery.com/prevAll">prevAll</a></li>
	<li><a href="http://api.jquery.com/nextUntil">nextUntil</a></li>
	<li><a href="http://api.jquery.com/prevUntil">prevUntil</a></li>
	<li><a href="http://api.jquery.com/parent">parent</a></li>
	<li><a href="http://api.jquery.com/parents">parents</a></li>
	<li><a href="http://api.jquery.com/parentsUntil">parentsUntil</a></li>
</ul>
<p>You can read the full list in the <a href="http://api.jquery.com/category/traversing/tree-traversal/">jQuery documentation</a>.
</p>

## Knowing which key the user typed

<p>We have learnt how to handle user’s mouse and keyboard events with jQuery. For the keyboard event, we often need to know what key the user has typed. For example, we may want to know if the user press “Enter”, or the arrows key. <br>In this lab, try to find out the <code>keycode</code> for the “Enter” key, arrows key and the normal A-Z/0-9 keys.
</p>
<p>Every event actually comes with a variable of that event object. It contains some useful information for the event, such as the element that triggers it, the mouse position or the key code.
</p>
<p>We can inspect this event object to find more specific information that’s helpful to our project. In the following code, you can inspect each <code>keyup</code>event. Try to use the code to find out the keycode of “Enter”, arrow keys and A-Z/0-9.
</p>
<pre>$('input').keyup(function(event){
  console.log(event); // log the keyboad event to console.
});
</pre>

## Adding and removing elements

<p>We used <a href="http://api.jquery.com/text"><code>text</code></a>, <a href="http://api.jquery.com/html"><code>html</code></a> and <a href="http://api.jquery.com/append"><code>append</code></a> to add elements and content dynamically. There is also a <a href="http://api.jquery.com/prepend"><code>prepend</code></a> that add content at the beginning of the selected element.
</p>
<p>For removal, we have the following methods:
</p>
<ul>
	<li><a href="http://api.jquery.com/remove">remove</a></li>
	<li><a href="http://api.jquery.com/empty">empty</a></li>
	<li><a href="http://api.jquery.com/detach">detach</a></li>
</ul>
<p>By learning these methods, we should be able to create or remove elements dynamically.
</p>

## Demo of cloning, adding and removing elements

<p>The following player’s score board code shows you how to use a template and clone to create a list of very similar items. Try following the code and create your own player’s board.
</p>
<p><a href="http://codepen.io/makzan/pen/RNEgvz">http://codepen.io/makzan/pen/RNEgvz</a>
</p>
<p>After following the code, try to use the same technique to create other list. For example, try to create a list of student marking for a high school. With both ascending and descending order.
</p>

## Fetch data from server

<p>The following code fetches data form the target server address.
</p>
<pre>var url = 'http://demo6508268.mockable.io/todos/';
$.getJSON(url, function(data) {
  console.log(data);
});
</pre>
<p>By executing the code, you will get the following output in the console.
</p>
<p><img src="https://s3.amazonaws.com/f.cl.ly/items/3r1o2w1e1J160W0r1P1R/Screen%20Shot%202015-03-20%20at%204.20.49%20PM.png?v=89bb51dd" alt="Screenshot of console logging data from a mock API with todo list items">
</p>
<p>You can view the demo in the following URL:
</p>
<p><a href="http://codepen.io/makzan/pen/wBRqKz">http://codepen.io/makzan/pen/wBRqKz</a>
</p>
<p>Now try to fetch your Facebook profile picture from the Facebook’s graph API: <br><a href="https://graph.facebook.com/(Your">https://graph.facebook.com/(Your</a> Facebook username)
</p>
<p>You should be able to fetch data similar to mine:
</p>
<pre>{
   "id": "578638460",
   "first_name": "Seng Hin",
   "gender": "male",
   "last_name": "Mak",
   "link": "https://www.facebook.com/senghinmak",
   "locale": "en_US",
   "name": "Mak Seng Hin",
   "username": "senghinmak”
}
</pre>
<h3>Taking the code further</h3>
<ol>
	<li>Try to combine the techniques in the todo list demo and player score demo to create a todo list with a “done” state.</li>
</ol>
<p>  You may use the following API as initial sample data.
</p>
<p><a href="http://demo6508268.mockable.io/v2/todos/">http://demo6508268.mockable.io/v2/todos/</a>
</p>
<ol>
	<li>By combining the techniques we learn from lecture 3 and previous lab, we could build the todo list that user can add items to it.</li>
	<li>Latest browsers support client-side persistent storage. Try to use the local storage to store the todo list.<br>I created a half-finish example that’s able to create new todo and save to the local store. It loads data from server at the first time opening the web page. You may find the code here and improve it:</li>
</ol>
<p><a href="http://codepen.io/makzan/pen/pvqrea">http://codepen.io/makzan/pen/pvqrea</a>
</p>

## Storing data in browser

<p>We can use the <code>[localStorage]</code> to store data in browser.
</p>
<p>The usage is very simple:
</p>
<pre>// save
localStorage.setItem( 'key', 'value');
// load
localStorage.getItem( 'key' );
</pre>

## More examples on nicely crafted focus states

<p>We learnt <code>addClass</code> and <code>removeClass</code> to toggle different states in JavaScript. CSS can reflect these states visually. Here are 2 examples that apply a beautiful and useful effects when the input field is focused.
</p>
<ul>
	<li>Password animation by <a href="https://dash.readme.io/login">readme.io</a></li>
</ul>
<p><img src="https://s3.amazonaws.com/f.cl.ly/items/2N2o3z292e2H2v3N4405/bloggif_545f1c6649795.gif?v=64809161" alt="Owl password">
</p>
<ul>
	<li>Basecamp’s <a href="https://basecamp.com/start">helper for sign-up form</a></li>
</ul>
<p><img src="https://s3.amazonaws.com/f.cl.ly/items/0t1c2l180r2n1T1E0y2F/bloggif_545f1f6d3a5c4.gif?v=bd41784f" alt="Basecamp’s signup form">
</p>
<p>That’s it for lab 3 of Beginning jQuery. Enjoy hacking the example code. And please <a href='#open-chat'>use the chat</a> for any questions.
</p>


<p><img src="http://mak.la/signature" width="121" height="54" style="width: 121px; height: 54px;">
</p>
<p>–Thomas Mak
</p>