---
cid: 56
title: Introducing Assets Pipeline
date: 2016-06-12
---

The styling, scripts, images are called assets.

Managing and loading assets has been a big issue for web designers.

## Assets issues

There are a lot of inconvenience when managing assets ourselves, here are the major issues.

1. Source file on dev; minification files on production.
2. Separated files for components in dev; one file for HTTP request optimization in production.
3. Writing preprocessing scripts in dev; requiring HTML/CSS/JS in production.

Asset pipeline solves all the above issues.

And one mode thing, fingerprint in asset pipeline optimizes the assets caching and invalidation.

> Asset pipeline optimizes the assets caching and invalidation

For more information on fingerprint, check the [rails guide](http://guides.rubyonrails.org/asset_pipeline.html).

Assets location
Normally, the assets are located in the `app/assets/` folder. By default, JS and CSS files are automatically loaded when inside the `app/asstes/javascripts/` and `app/assets/stylesheets/` folder.

Image files inside `app/assets/images` folder can be reference with `image_tag`:

~~~
<%= image_tag  'file_name_here.png' %>
~~~

Third party assets can be placed in the `app/vendor/assets/` forder. The files here will be correctly loaded.

By default, rails comes with jQuery ready so we do not need to include our own jQuery script.

Note: in older rails version, jQuery is not a default loaded library.

## What is preprocessing?

Preprocessing let us write the HTML/CSS/JS code in a higher level. You can think it improves those languane to some points. Leting us writing them easier, faster, less bugs.

For HTML, we have [HAML](http://haml.info/) and [Slim](http://slim-lang.com/) choices.

For CSS, we have [Scss](http://sass-lang.com/), [Less](http://lesscss.org/) and [Stylus](http://learnboost.github.io/stylus/).

For JavaScript, we have [CoffeeScript](http://coffeescript.org/).

## Managing asset files

The entry point of the assets:

1. The application.js
2. The application.css
3.
It is an entry point because in each file it includes the other files into the assets.

~~~
require name     <-- means include that file.
require_tree .   <-- means include all the files in the current directory.
~~~

There is a list of folders the asset pipeline will search. But you still need to call `require` to import them. Rails doesn’t auto-import asset files except the `require_tree`.

~~~
/app/assets/
/lib/assets/
/vendor/assets/
~~~

Actually we can use the file others than the “application” name. Just clone the `application.css` and `.js` into a new file and update the asset include name in the `views/layout/application.html.erb` file.

Note: How about we want to include specific controller assets only?

1. Remove the require_tree . in the application js and css file.
2. Use `<%= javascript_include_tag params[:controller] %>` when needed
3. or `<%= stylesheet_link_tag params[:controller] %>` when needed