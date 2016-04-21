---
cid:26
date: 2016-04-10
title:jQuery ready function
icon:notes
---

What is jQuery ready function?



~~~ javascript
$(document).ready(function(){
  // handle logic related to DOM.
});
~~~


When to use jQuery ready function?

Use it when you put your Javascript in the `<head>` (Before your body content)

Otherwise, we should put the Javascript before closing the `</body>` tag, which the browser loads and executes the JavaScript after loading all the content HTML.

In normal case, placing the JavaScript at the end has all the benefits.

It is faster because browser loads the content before encountering the script tag.

It also gets rid of the jQuery ready function because now when the JavaScript code runs, the content HTML must be loaded because the content is placed before the script.