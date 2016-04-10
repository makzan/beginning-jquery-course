---
cid: 19
date: 2016-03-19
title: Exercise—Building a Count game with jQuery
tags: exercise
icon: exercise
---

Here is the result that we are going to make:

![](/images/19-Count%20game%20result.gif)

Here are the steps to create the Count game in HTML with jQuery.

1. Define the game DIV with a fixed dimension. (We handle flexible dimension later)
2. Define a mock game elements. In this game, they are the numbered box.
    - Each one has a `data-number` to store the value of the box.
    - Each box also display the number value.
3. Use jQuery to select each box and randomize the position on the screen.
4. Create a function to handle the box clicking.
5. Create a function to generate new box into the game.
6. Create a new scene for the game over.
    - At this step, you may also wants to make the game element container one of the scene.
    - You can do that by using `class="scene"`
7. We are going to create scene transition and switching. Mark the default scene, the game container, with `.active` class.
8. Time to style the `.scene` and `.active` to make it functional.
9. Define a game over function that shows the game over scene.
10. Code the HTML of the game over scene to add a heading and a restart button.
11. Define a function to reset the game into a new game status.
12. Handle the clicking of restart button and reset the game. It should also hide the game over scene.
13. That’s all for the essential. But we have a lot more work to fine tune the game.

Here is the source code:

[http://codepen.io/makzan/pen/EKWjJw](http://codepen.io/makzan/pen/EKWjJw)

Here is the screen recording of how I made the game.

<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:62.5% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_5gdsovcj8h seo=false videoFoam=true" style="height:100%;width:100%">&amp;nbsp;</div></div></div>