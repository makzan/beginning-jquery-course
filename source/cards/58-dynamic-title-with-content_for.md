---
cid: 58
title: Dynamic title with content_for
date: 2016-06-12
---


Now all the our web pages share the same title, which is it a good practice for UX and SEO reason.

So we want dynamic title on each page. In the way, the title is a variable that varies depends on the current showing page. Take photo showing as example, the title may be the photo title.

We learnt to define `@variable` in controller that passes to the view. But title is responded by view instead of controller. Let’s use the view approach – `content_for`


In the `views/layouts/application.html.erb` file:

~~~
<title>
  <% if content_for? :page_title %>
    <%= yield :page_title %> – Photo Gallery
  <% else %>
    Photo Gallery
  <% end %>
</title>
~~~

in the `views/photos/show.html.erb` file, prepend the following code snippet at the beginning, before any existing content.

~~~
<% content_for :page_title, @photo.title %>
~~~

## Explaining content_for

`content_for` is defined in view. It is used for defining specific content in that view.

For example, a specific page — let say ‘about’ — may want to include one special CSS file. Since CSS is linked inside the <head> tag, we can’t link it anywhere inside that about view file because the view file is included into the <body> tag. That’s where we need the content_for.

In the `application.html.erb` layout file

~~~
<!DOCTYPE html>
<html>
<head>
  <% if content_for? :special_css_files %>
    <%= yield :special_css_files %>
  <% end %>
</head>
<body>

<%= yield %> <!-- this is where the view file included. -->

</body>
</html>
~~~

Now assume our about view is `about.html.erb`, we can define a `special_css_files` section that will be included (yield) in the layout inside the `<head>` section.

~~~
<% content_for :special_css_files do %>
  <link rel='stylesheet' type='text/css' media='all' href='special.css'>
<% end %>
<!-- The rest of about content goes here -->

~~~