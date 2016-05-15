---
cid: 50
title: Blog theme in PHP
date: 2016-05-14
---

Hi there,


We make the PHP site styling with theme options.


We can store the theme options in several way, we can store them using the $_SESSION variable. If there is user account for the visitor, we can store the theme preference in the database also.


Pre requirement: Assuming now we have a basic blog site that is powered by database. It is in model view controller approach. You can find the file we’re based on in the following download:


<a href="http://life-log-md.s3.amazonaws.com/vva/38/original/youthskills-php-blog-theme.tar.gz?1463237950">youthskills-php-blog-theme.tar.gz</a>


We make the theme by following step.


We need the following steps:

1. Hardcode 2 theme styles with CSS.
2. Create a form with multiple radio buttons for theme choosing.
3. Store the theme option in $_SESSION.
4. Allow creating new theme options by creating a database to store CSS.
5. Create a view by displaying all the theme  styles, name and links to show/edit.
6. Build a form to create new CSS style and store into the database.
7. Edit the style by showing the form .
8. For each theme style, allow uploading an image thumbnail.



<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:62.5% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_2laxpvt7wz seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>

You can find the final source code in the following C9 IDE:

https://ide.c9.io/makzan/youthskills-php-blog-theme


Here is the marking scheme to validate your works.



~~~
| mark | description |
| 15   | You have separated the code into model, view and controller. |
| 5    | There is a view to choose theme styles. |
| 5    | Theme choosing is stored in $_SESSION. (You need to proof it) |
| 5    | Theme applies after choosing theme and switching page. |
| 5    | Themes table is created in database. |
| 5    | Theme applies through database record. |
| 5    | Able to list all themes from database |
| 5    | Clicking on the theme name show an edit theme view |
| 5    | edit theme view allows inputting theme name and CSS rules |
| 5    | able to save theme modification into database. |
| 5    | allow creating new theme by showing a form to input name and CSS rules, saving the form creates a new theme record in database with the input data. |
| 5    | theme choosing shows themes from database. |
| 10   | the first theme shows a modern and elegant look to display a blog and the posts. Used sans-serif font mainly. |
| 10   | the second theme shows a traditional newspaper look which display the blog and posts with a nice typography settings. |
| 10   | the third theme shows a magazine styles way to display blog posts, which includes attractive layout and photo effects. |
| 20   | BONUS: there is comments for each post. The comments are associated to the post record in database. User can input comment in post view. |
| 10   | BONUS: the first 3 themes include styles of the comments |
| 130  | Total |
~~~









