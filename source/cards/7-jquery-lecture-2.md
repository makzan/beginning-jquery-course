---
cid: 7
date: 2016-03-07
title: Lecture 2—Selecting and Hiding HTML DOM elements
tags: lecture, jquery
icon: notes
---

This is lecture 2 of the Beginning jQuery course. Make sure you have read lecture 1 and can code basic HTML and JavaScript.

In this lecture, we focus on the basic elements selection and toggling visibility.

## Selecting DOM elements

Most of the jQuery commands apply actions and behaviors to a selected DOM element. So the first step is to get familiar with jQuery’s selector.

Here are some examples:

<pre>// select all anchor link.
$("a")
// select all list item.
$("li”)
// select input button with ID “submit-button”
$("input#submit-button")
</pre>
The following demo page provides a collection of selector examples. You may toggle the selectors on the left and view the highlights of the selected elements on the right side.

<a href="http://codylindley.com/jqueryselectors/">http://codylindley.com/jqueryselectors/</a>

For the full selector list, you may check out the following jQuery documentation.

<a href="http://api.jquery.com/category/selectors/">http://api.jquery.com/category/selectors/</a>

## Showing and Hiding elements
After we select the elements, we perform an action (or a series of actions) on the selection. These actions may be toggling visibility, manipulating elements or registering events handling.

One basic action is to display and hide the selected elements. We usually achieve that by <code>show()</code> and <code>hide()</code> method.

For example, imagine that it’s a gmail-like web app, when user clicks on the “Compose Mail” button, we show a composer dialog.

<img src="https://dl.dropboxusercontent.com/u/3079250/Public%20for%20Beginning%20jQuery/Screen%20Shot%202015-03-09%20at%209.31.40%20PM.png" alt="Gmail new mail screenshot">

To do so, we select the new-mail element—let’s assume it’s #new-mail—and call the <br>

<code>show</code> acrion on it.

<pre>$('#new-email').show();
</pre>
Of course, we need to show the dialog only after the user clicks on the compose button. So here is the click event handler.

<pre>$('#compose-button').click(function(){
  $('#new-mail').show();
});
</pre>
We will cover the event handling in lecture 3.

Here is a full demo on the email composing form’s toggling HTML and JavaScript:

<a href="http://codepen.io/makzan/pen/jEvdXM">http://codepen.io/makzan/pen/jEvdXM</a>

## Example of selecting and changing text

Given the following example:

<pre>&amp;lt;p&amp;gt;Enjoy the rest of &amp;lt;span class='the-day'&amp;gt;the day&amp;lt;/span&amp;gt;.&amp;lt;/p&amp;gt;
</pre>
We would like to dynamically change the wording “the day” into the week day name. For example, we want to show “Enjoy the rest of your Friday”

We can do that by defining the data and setting the text dynamically with <code>text()</code> method.

<pre>var days = ['Sunday','Monday','Tuesday','Wednesday’,
'Thursday','Friday','Saturday'];
var todayIndex = (new Date()).getDay();
var day = days[todayIndex];
$('.the-day').text("your " + day);
</pre>
You may find the code example here:

<a href="http://codepen.io/makzan/pen/yyxwMp">http://codepen.io/makzan/pen/yyxwMp</a>

## JavaScript best practices

When you’re writing more JavaScript, you should start learning to write the JavaScript in the right way. There are many essays and books discussing the best practices that we should follow. The following lists few of them that I highly recommend you to check them out.

<ul>
	<li>Thankful’s JavaScript Best Practice, <a href="http://www.thinkful.com/learn/javascript-best-practices-1/">part 1</a> and <a href="http://www.thinkful.com/learn/javascript-best-practices-2/">part 2</a>. </li>
	<li><a href="http://jstherightway.org/">JS the right way</a></li>
	<li><a href="https://developer.yahoo.com/performance/rules.html">Yahoo! Performance Guide</a></li>
</ul>

## JavaScript and jQuery books

If you would like to read book for more details, I recommend the following books.

<em><a href="http://shop.oreilly.com/product/0636920012740.do">Head First jQuery</a></em> — The head first series contains lots of illustrations. This is definitely the jQuery for absolute beginner.

<em><a href="http://javascriptbook.com/">JavaScript and jQuery books</a></em> — This book is good for beginner to learn JavaScript and jQuery. There are plenty of charts and illustrations in the book to help you understand the topics. You may want to read it’s companion book <em><a href="http://www.htmlandcssbook.com/">HTML and CSS book</a></em> too if you are new to HTML and CSS.

<em><a href="http://shop.oreilly.com/product/9780596517748.do">JavaScript: The Good Parts</a></em> — This is a must read book if you want to master the JavaScript language. This books shows you how JavaScript use prototype for object-oriented programming.

<img src="http://mak.la/signature" width="121" height="54" style="width: 121px; height: 54px;">

–Thomas Mak


