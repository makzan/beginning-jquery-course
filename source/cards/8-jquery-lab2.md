---
cid: 8
date: 2016-03-07
title: Lab 2—Adding and Removing class
tags: lab, jquery
icon: exercise
---


<p>This is Lab 2 of the Beginning jQuery course. In this lab, we will work on the 2 topics:
</p>
<ol>
	<li>Changing visual style with addClass/removeClass.</li>
	<li>Validating form input.</li>
</ol>
<h2>1. Changing visual style with addClass and removeClass</h2>
<p>The <code>addClass</code> and <code>removeClass</code> is one of the key technique in jQuery which is often underestimated. By combining CSS styles, we can create visual changes by using these methods.
</p>
<p>There are many situations that addClass and removeClass can make the code much simpler and elegant than changing the styles directly.
</p>
<h2>Example: Toggling error styles</h2>
<p><a href="http://codepen.io/makzan/pen/azRQaP">http://codepen.io/makzan/pen/azRQaP</a>
</p>
<p>This example shows how we can toggle visual styles by using the <code>addClass</code> and <code>removeClass</code> function.
</p>
<p>Given the following style in CSS.
</p>
<pre>input.error {
  border: 1px solid FIREBRICK;
  box-shadow: 0 0 4px FIREBRICK;
  background: WHITE;
  color: BLACK;
}
</pre>
<p>We can then toggle the error state by the following jQuery code.
</p>
<pre>$('input').addClass('error');
$('input').removeClass('error’);
</pre>
<h3>Taking the code further</h3>
<p>The example code is based on the input exercise from Lab 1. In lab 1, I suggested you to add more inputs to the form. For example:
</p>
<ul>
	<li>You might add a password field and a password confirmation field. </li>
	<li>You might also add radio buttons for options such as gender. </li>
	<li>You might also add a checkbox that requires user to check it to accept the service terms before submitting the form.</li>
</ul>
<ol>
	<li>Now we learn to put error style on specific input. Please try to add more input fields and then apply error style only to the affected inputs with errors.</li>
	<li>We have learnt <code>text</code> and <code>html</code> method. Try to show more specific error messages when the <code>.error-message</code> element shows. Make sure you have targeted multiple errors.</li>
</ol>
<h3>Tips:</h3>
<p>We can listen to the <code>keydown</code> event and remove all error effects. This is helpful because we know the user is trying to fix the error.
</p>
<pre>// Remove any error when form changes.
$('form input').keydown(function(){
  $('input').removeClass('error');
  $('.error-message').hide();
});
</pre>
<p>Demo: <a href="http://codepen.io/makzan/pen/OPBrym">http://codepen.io/makzan/pen/OPBrym</a>
</p>
<h3>Taking the code further</h3>
<p>Can we check the form during the user is still inputting? We don’t need to wait until the form submission to indicate the error messages. Try to make the error messages respond instantly when user is inputting the form.
</p>
<p>Here are several events that might be helpful:
</p>
<ul>
	<li><a href="http://api.jquery.com/click/">click</a></li>
	<li><a href="http://api.jquery.com/keydown/">keydown</a></li>
	<li><a href="http://api.jquery.com/keyup/">keyup</a></li>
	<li><a href="http://api.jquery.com/change/">change</a></li>
	<li><a href="http://api.jquery.com/focus/">focus</a></li>
	<li><a href="http://api.jquery.com/blur/">blur</a></li>
</ul>
<h2>2. Lab—Building images slideshow</h2>
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
	<li>Can we replace the image with HTML elements in each slide? Here is an example of having h2 and text in slide 1: <a href="http://codepen.io/makzan/pen/dPgQrb">http://codepen.io/makzan/pen/dPgQrb</a></li>
</ol>
<h3>More examples</h3>
<p>Here is a lucky draw effect that I created using similar technique. I used it to randomly selected one student to answer question in my previous class.
</p>
<p><a href="http://codepen.io/makzan/pen/WbeXRq">http://codepen.io/makzan/pen/WbeXRq</a>
</p>
<hr>
<p>Please <a href='#open-chat'>use chat</a> to send me your exercises. I’ll check them and reply you with suggestions. For any questions or queries, please also raise them. I’m here to help.
</p>
<p>Thanks and Best Regards,
</p>
<p><img src="http://mak.la/signature" width="121" height="54" style="width: 121px; height: 54px;">
</p>
<p>Thomas Seng Hin Mak
</p>