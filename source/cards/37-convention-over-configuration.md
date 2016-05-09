---
cid: 37
title: Convention over Configuration
date: 2016-05-05
---

Convention over Configuration is one of the main principles in Ruby on Rails.

The reason behind the Convention over Configuration is because Rails has handles the most common and essential components in web app development.

It means when we define something by names, the system assumes that we have assigned a functionality to it.

For example,
<ul>
<li>A table in database is always in plural nouns.</li>
<li>A model class is always capital and singular.</li>
<li>In database migration command, "AddColumnToPost" means adding columns to table "posts".</li>
<li>Controller action: posts#index will render view in posts/index.html.erb by default.</li>
<li>All files inside the config/initializers will be loaded automatically.</li>
</ul>