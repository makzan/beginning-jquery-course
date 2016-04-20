---
cid: 22
date: 2016-04-08
title: Sibling Selector
---

In CSS and JavaScript selector, there is 2 sibling selector to select elements within the same level, next to the first element. They are **adjacent sibling selector** and **general sibling selector**.

## <strong>Adjacent sibling selector

</strong>Adjacent sibling selector selects B element that _immediately_ follows the first specified element (A). A and B needs to share the same parent—at the same indentation level.

A + B

Detail documentation from MDN: https://developer.mozilla.org/en/docs/Web/CSS/Adjacent_sibling_selectors

Demo: 

<p data-height="266" data-theme-id="dark" data-slug-hash="VadXwx" data-default-tab="html,result" data-user="makzan" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/makzan/pen/VadXwx/">Adjacent sibling selector demo</a> by Thomas Seng Hin Mak (<a href="http://codepen.io/makzan">@makzan</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## <strong>General sibling selector</strong>

General sibling selector selects B elements that are after the first selector (A). A and B needs to share the same parent—at the same indentation level.

A ~ B

Detail documentation from MDN: https://developer.mozilla.org/en/docs/Web/CSS/General_sibling_selectors

Demo:

<p data-height="266" data-theme-id="dark" data-slug-hash="eZKMYd" data-default-tab="html,result" data-user="makzan" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/makzan/pen/eZKMYd/">General sibling selector demo</a> by Thomas Seng Hin Mak (<a href="http://codepen.io/makzan">@makzan</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>



