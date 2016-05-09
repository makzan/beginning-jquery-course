---
cid: 13
date: 2016-03-12
title: Building images slideshow
tags: note, jquery
icon: notes
---

<small>(The content is extracted from <a href='/8-jquery-lab2.html'>jQuery lab 2</a>)</small>

<p><img src="http://cl.ly/image/390R06241j3U/Screen%20Shot%202015-03-13%20at%204.57.15%20PM.png" alt="Slideshow screenshot">
</p>
<p>The following steps show how we can build an image slideshow by using jQuery and CSS transition.
</p>
<ul>
	<li><a href="http://codepen.io/makzan/pen/zxmMvR">Step 1: Images list in HTML</a></li>
	<li><a href="http://codepen.io/makzan/pen/pvxQEP">Step 2: Basic CSS</a></li>
	<li><a href="http://codepen.io/makzan/pen/RNeqGz">Step 3: Adding jQuery</a></li>
	<li><a href="http://codepen.io/makzan/pen/Pwyxbw">Step 4: Animating with CSS</a></li>
	<li><a href="http://codepen.io/makzan/pen/KwGrNW">Extra: Animating style 2</a></li>
	<li><a href="http://codepen.io/makzan/pen/XJxxGa">Extra: Animating style 3</a></li>
</ul>
<p>In step 1, we defined the images list in HTML. It shows that we are listing a collection of content by using the HTML list structure.
</p>
<p>In step 2, we style the slideshow layout with CSS position property. There is no any slideshow yet.
</p>
<p>In step 3, we add the jQuery logic which rotate the images in a time interval.
</p>
<p>In step 4, we animate the slideshow with CSS transition and transform.
</p>
<p>In extra steps, we explore other animating styles by only changing the CSS.
</p>
<h3>Taking the code further</h3>
<p>This slideshow example provides a solid foundation. This is production ready and can be modified to fit different usages in your next web projects.
</p>
<ol>
	<li>Try creating your own images sliding animation by only changing the CSS. Keep in mind that we avoid defining styles in JavaScript.</li>
	<li>Try to add a next/previous slide switching feature. This can be done by listening to the click event of a next/previous button and changing the <code>currentIndex</code> variable to show next or previous slide.</li>
	<li>Can we replace the image with HTML elements in each slide? Here is an example of having h2 and text in slide 1: <a href="http://codepen.io/makzan/pen/dPgQrb</a></li>
</ol>
<h3>More examples</h3>
<p>Here is a lucky draw effect that I created using similar technique. I used it to randomly selected one student to answer question in my previous class.
</p>
<p><a href="http://codepen.io/makzan/pen/WbeXRq</a>
</p>