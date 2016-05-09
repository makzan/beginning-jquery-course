---
cid: 14
date: 2016-03-15
title: Lecture 3—Functions and Events Handling
tags: lecture, jquery
icon: notes
---

<p>This is lecture 3 of the Beginning jQuery course. In this lecture, we focus on the JavaScript function and jQuery events handling methods.
</p>
<p>If you come across any questions, feel free <a href='#open-chat'>use the chat</a> to ask me.
</p>
<h2>Understanding Function</h2>
<p>If you’re new to JavaScript function, I suggest to get started reading the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions">reference from Mozilla Developer Network</a>.
</p>
<p>After you understand the function, I recommend reading <a href="http://eloquentjavascript.net/03_functions.html">this chapter from the Eloquent JavaScript</a> book.
</p>
<h3>Understanding the <code>this</code> in JavaScript</h3>
<p>When we are inside a function, sometime we may want to refer to the current context by using the special variable <code>this</code>. But what is the <code>this</code>actually pointing to?
</p>
<p>A simple rule is JavaScript’s <code>this</code> refers to the one that calls the function. For example:
</p>
<pre>function foo() {
  console.log(this);
}
window.foo(); // `this` refers to window.
var objectA = {
  hello: function(){
    console.log(this);
  }
};
objectA.hello(); // `this` refers to `objectA`.
objectA.hello.call(window); // ** `this` refers to `window`.
$('#input').keydown(function(){
  console.log(this);  // `this` refers to the $('#input').
});
</pre>
<p>** Note that we can use the <code>call</code> or <code>apply</code> method to change the context of any function calling
</p>
<p>In other common object-oriented language, <code>this</code> ofter refers to the same instance. In JavaScript, the <code>this</code> refers to the context that calls that function.
</p>
<p>Please make sure you read the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this">Mozilla Developer Network’s this reference</a> and understand the detail on how <code>this</code> works.
</p>
<h3>Advance: Object and Prototype</h3>
<p>Once you fully understand how function works, I recommend reading the <a href="http://eloquentjavascript.net/06_object.html">Object chapter from the Eloquent JavaScript</a> book. It shows you how we can manage objects in object oriented way.
</p>
<h2>Event handling</h2>
<p>Handling events is one of the most common tasks when writing jQuery. We often need to respond to user’s actions and provide appropriate feedbacks. The following jQuery’s events handling documentation provides a getting started guide.
</p>
<p><a href="http://learn.jquery.com/events/handling-events/</a>
</p>
<h3>Delegation</h3>
<p>The <a href="http://api.jquery.com/delegate/"><code>delegate</code> method</a>.
</p>
<p><a href="http://api.jquery.com/live/</a>
</p>
<p><a href="http://api.jquery.com/delegate/</a>
</p>
<h2>Looping with jQuery each</h2>
<p>In some cases, we need to loop through all the selected elements and apply logic on it. We can use the <a href="http://api.jquery.com/each/"><code>each</code> method</a>.
</p>
<p>Usage example:
</p>
<pre>$('selector').each(function(){
  // each of the matched element
  $(this).something();
});
</pre>
<h2>Setting and Getting HTML attributes</h2>
<p>There are <code>prop</code> and <code>attr</code> methods. Both methods access the attribute of the selected HTML tag. We prefer <code>prop</code> most of the time, as explained in <a href="http://stackoverflow.com/a/13626565">this StackOverflow answer</a>
</p>
<h2>Example—Inputing multiple names</h2>
<p><img src="http://cl.ly/image/042Z3e1u3O1I/Screen%20Shot%202015-03-17%20at%204.58.40%20PM.png" alt="Screenshot of the example">
</p>
<p>I created <a href="http://codepen.io/makzan/pen/vEQddR">an example</a> that demonstrates the techniques listed in this lecture. It is a list of inputs that user input names into it. User can add more inputs by clicking the “+” button. There is a confirmation dialog when submitting the form.
</p>
<p><a href="http://codepen.io/makzan/pen/vEQddR</a>
</p>
<h2>Summary</h2>
<p>After going through the links and code examples listed in this lecture, you should be able to handle different events.
</p>


<p><img src="http://mak.la/signature" width="121" height="54" style="width: 121px; height: 54px;">
</p>
<p>Thomas Mak
</p>