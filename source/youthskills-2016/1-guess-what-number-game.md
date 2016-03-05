---
cid: 1
date: 2016-03-05
title: Exercise 1—Guess-what-number Game with jQuery
tags: jQuery, beginner, exercise
---

# Exercise 1—Guess-what-number Game with jQuery

tags: jQuery, beginner, exercise

In this exercise, we create a guess-what-number game. The following steps list the requirement of the game.

1. The computer generated a random number between 1 and 100.
2. The web page shows an input, waiting for the player to guess a number.
3. After the player guesses, the computer tells the player if the number is correct. Otherwise, the computer tells if the guessed number is too larger or too small.
4. If the guessed number is correct, the web page shows a “Congratulations” wording and allow the player to restart the game.

## Suggested action steps to implement the game

1. Create a new CodePen page
2. Write the **HTML** for the following parts:
	1. number input
	2. “guess” button
	3. Messages for larger or smaller number
	4. Congratulations message.
	5. “Restart Game” button.
3. Use jQuery to hide

## What you need to know to make the game

**Loading jQuery:**

~~~
<script src='http://code.jquery.com/jquery.min.js'></script>
~~~

**Loading jQuery, CodePen way:**

In the pen _setting \> Javascript tab \> Quick Add \> jQuery_.

**Basic jQuery**

**[jQuery reference](http://api.jquery.com)**

jQuery detect click event:

~~~
$(selector).click(function(){
  // code to handle the click
});
~~~

## Taking the code further

There are several ways to improve the game.

1. **Styling**. You can use CSS to make the game looks nicer. Try to style it to have a modern look.
2. **Mobile Friendly**. By using the _viewport_ meta tag, you can make the game displays nicer in small screen. Moreover, you can handle _touch_ event for the “guess” and “restart” button clicking.
