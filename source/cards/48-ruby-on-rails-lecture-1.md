---
cid: 48
title: Lecture 1—Beginning Rails
date: 2016-05-09
---

Hi there,

In this lecture, we learn the most basic things about Ruby on Rails. Specifically, we learn:



<ul>
<li>What is Ruby, and Rails</li>
<li>Framework vs Library</li>
<li>Rails is a framework</li>
<li>Why Rails?</li>
<li>Rails development environment</li>
<li>Using Cloud9 development</li>
<li>Running the default screen</li>
<li>Convention over Configuration</li>
<li>Configure initializers</li>
<li>DRY principle</li>
</ul>



## Lab 1—Getting familiar with Ruby on Rails environment

After this lecture, you should be able to complete the following lab 1 exercise:



<ul>
<li>[Lab 1.1] Finish the TryRuby.org</li>
<li>[Lab 1.2] Getting the Rails up-and-running</li>
<li>[Lab 1.3] Post Scaffold</li>
</ul>






### [Lab 1.1] Finish the TryRuby.org

In this lab, we have a glimpse on the Ruby language.

Time for Action:

<ol><li>Browse to the <a href="http://TryRuby.org">TryRuby.org</a> and complete all the tutorials there.</li></ol>


Checkpoint:
<ol><li>You have completed the TryRuby.org.</li></ol>



### [Lab 1.2] Getting the Rails up-and-running

In this lab, we setup the Rails development environment.

Time for Action:

<ol>
<li>Setting up the Ruby on Rails on Cloud9 IDE, or any development environment on your choices.</li>
<li>Boot-up the rails development server via `rails server`</li>
</ol>


Checkpoint:

<ol>
<li>Rails application can run without error.</li>
<li>You can see the default Rails welcome screen.</li>
</ol>


### [Lab 1.3] Post Scaffold

In this lab, we create a Post CRUD by using the Rails scaffold generation.

Time for Action:

<ol>
<li>In the terminal, make user we are in the Rails project directory.</li>
<li>Type `rails generate scaffold Post title author content:text is_published:boolean`</li>
<li>In the generated migration file, set the default value of `is_published` to `true`.</li>
</ol>


Checkpoint:
<ol>
<li>Can list all posts in `/posts/`</li>
<li>Can create post via `/posts/new`</li>
<li>Can show one post via `/posts/:id`</li>
<li>Can edit post via `/posts/:id/edit`</li>
<li>Can delete post via `/posts/:id` (DELETE)</li>
<li>Content showing preserves the line break.</li>
</ol>


After you finish all the lab exercises, please explore the ActiveRecord by running different commands in `rails console`. For example, you may run:
<ul>
<li>`Date.current + 3.days`</li>
<li>`Post.all`</li>
<li>`Post.all.reverse`</li>
<li>`Post.all.count`</li>
<li>`p = Post.new`</li>
<li>`Post.where('created_at > ?', Date.current)`</li>
</ul>

