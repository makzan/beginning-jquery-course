---
cid: 9
date: 2016-03-11
title: Adding jQuery into HTML
tags: note, jquery
---

When using jQuery in Codepen, we only need to specific the library by the quick add feature. (Pen setting > JavaScript > Quick Add > jQuery)

But in real world, we aren’t using sandbox. We write HTML and JavaScript code in separated files and need to import all the external scripts file into the HTML.

So, make sure you have included the jQuery library into the web page before running your jQuery code.

```javascript
<script src='http://code.jquery.com/jQuery.min.js'></script>
```