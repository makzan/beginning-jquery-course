---
cid: 24
date: 2016-04-09
title: Creating a PHP website to host our games
icon: notes
---

Hello,

In this chapter, we work on the PHP part.

We do our PHP exercise in c9.io.

1. Go to c9.io
2. Create an account if you don’t have one.
3. Create new public workspace, give it a name, and choose PHP.
4. Then we are now ready to code the PHP.
5. To test the PHP, click on the "Run Application".


Ultimately we want to build a website that host all the HTML5 games we have made during the course. But we’ll build the PHP website step-by-step.

Here is the milestones to build our HTML5 game website.

1. Create a single page website that show the title and banner of the games we have made. Clicking on the title may link to the Codepen of the game.
2. Create a 2 pages hierarchy for our website:
    1. The home page is the index of our games.
    2. Clicking on any game goes to the game page. Here is how the game page works:
        - The page gets the title and Codepen URL from the query string. (e.g. game.php?title=ABC&url=https://codepen.io/makzan/blahblahblah)
        - The page shows the game title and a link to go back to home page.
        - The page uses iframe to embed the Codepen-written HTML5 games into the page.
3. Database to create and store game.
4. HTTP auth.
5. Database and $_session PHP auth.

<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:62.5% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_76cv0gz93v seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>


<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:62.5% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_3uvqwbtaas seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>