---
cid: 52
title: Lecture 4–Devise and Tagging Gems
date: 2016-05-23
---

Hi there, welcome back to the Ruby on Rails course.

In this lecture we use 2 gems to enhance the Link Redirection.

Gems are plugins in Ruby. Rails itself is a gem. Different modules of Rails are also gems, like ActiveRecord, ActiveSupport, ActiveCable, Turbolinks. They are individual plugins. For example, the Turbolinks can be used without Rails. ActiveSupport could also be loaded without Rails dependency.

We will use the <a href="https://github.com/plataformatec/devise">Devise</a> gem for user authentication and <a href="https://github.com/mbleigh/acts-as-taggable-on">act_as_taggable_on</a> gem for tagging.

Sometimes, we don’t know what gem to use, there are some indicators:
<ol>
<li>Is it still actively maintained and developed?</li>
<li>Are there many people using this gem?</li>
<li>Who is the creator behind the gem?</li>
<li>How is it compare to other gems with similar functionality?</li>
</ol>


For gem comparison, we can use <a href="https://www.ruby-toolbox.com">Ruby Toolbox</a>. The ruby toolbox site groups different gems and compare their activities and popularity.

Here is the video that add the Devise gem for user authentication in the Link Redirection example.


<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_j4kek4gjrv seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>

Here are some recaps on the code we used in the video:

Installation:

In Gemfile:



~~~
gem 'devise'
~~~


In shell:



~~~
$ bundle
$ rails generate devise:install
$ rails generate devise User
$ rake db:migrate
~~~


In LinksController:



~~~
before_action :authenticate_user!, except: :redirect
~~~


Change all `Link.` to `current_user.links.`. (Except the `redirect` action)

User class:



~~~
class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
        
  has_many :links
end
~~~


Link class:



~~~
class Link < ActiveRecord::Base
  belongs_to :user  
    
  validates :short_url, uniqueness: true  
    
  # ... existing code
    
end
~~~




Here is the video that add the act_as_taggable_on gem to add tagging functionalities to links.

<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_jifcs4d3fj seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>

Here are some recaps on the code we used in the video:

Installation:

In Gemfile:



~~~
gem 'acts-as-taggable-on', '~> 3.4'
~~~


In shell:



~~~
$ bundle
$ rake acts_as_taggable_on_engine:install:migrations
$ rake db:migrate
~~~



Link model class.



~~~
class Link < ActiveRecord::Base

  acts_as_taggable    
    
  # ... existing code
    
end
~~~



`app/views/links/_form.html.erb` file:



~~~
<div class="field">
  <%= f.label :tag_list %><br>
  <%= f.text_field :tag_list %>
</div>
~~~


For displaying the URL for the short URL:



~~~
@host = request.host
~~~


Customize tag parser in `lib/my_parser.rb`:



~~~
class MyParser < ActsAsTaggableOn::GenericParser
  def parse
    ActsAsTaggableOn::TagList.new.tap do |tag_list|
      tag_list.add @tag_list.split /,|\s/
    end
  end
end
~~~


Configure gem to use my_parser:



~~~
# /config/initializers/act_as_taggable_on.rb

# if want auto load, use this:
# config.autoload_paths << Rails.root.join('lib')

require Rails.root.join 'lib', 'my_parser.rb'

ActsAsTaggableOn.default_parser = MyParser
~~~


For tags searching in controller:



~~~
if params[:tag].nil?
  @links = current_user.links.all
else 
  @links = current_user.links.tagged_with(params[:tag])
end
~~~


For printing the tag list with a link.



~~~
module LinksHelper
  
  def tag_list_with_link(tag_list)
    html = ""
    
    tag_list.each do |tag| 
      html += link_to(tag, tag_path(tag)) + " "
    end 
    return html.html_safe
  end
  
end
~~~


Updated `links/index.html.erb` file:



~~~
<% if params[:tag].nil? %>
  <h1>Links</h1>
<% else %>
  <h1>Links with #<%= params[:tag] %></h1>
<% end %>

<%= link_to 'New Link', new_link_path, class:'button' %>

<ul class='link-list'>
  <% @links.each do |link| %>
    <li>
      <p><%= link_to link.original_url, link %></p>
      <p><input readonly value="http://<%= @host %>/<%= link.short_url %>"></p>
      <p><small>Visited <%= link.visited_count %> times.</small></p>
      
      <p><%= tag_list_with_link(link.tag_list) %></p>
    </li>
  <% end %>
</ul>
~~~


Some extra CSS styles:



~~~
.button {
  display: inline-block;  
  padding: 0.5em 1em;
  background: #efefef;
}

ul.link-list {
  padding: 0;
  margin: 0;
  list-style: none;
}


.link-list li {
  border-bottom: 1px dashed #ccc;
  
  padding: 2em 0;
}
.link-list li:first-child {
  border-top: 1px dashed #ccc;
}

.link-list input {
  width: 100%;
}
~~~