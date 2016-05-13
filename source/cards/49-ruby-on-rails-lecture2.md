---
cid: 49
date: 2016-05-12
title: Ruby on Rails—Lecture 2
---

Hi there,

I’m Thomas. Welcome to the Ruby on Rails Lecture 2.

In this lecture, we learn the 1-to-many associations. We create a _comment_ resource which is nested inside each _post_ record.

After this lecture, you will learn:
<ul>
<li>Nested resources</li>
<li>1-to-many association</li>
<li>More understandings on the routes→controller↔model→view flow</li>
</ul>
I have recorded the implementation of the post-comment example in the following screencast.

<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_dh8r5kozi6 seo=false videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>

Note: There is no narration for the video at the moment.

Commands for this example:

First, we would like to generate the scaffold for `Comment`. We will heavily modify the generated code to fit into the post-comments association.



~~~
$ rails generate scaffold Comment author content:text
$ rails generate migration AddPostToComment post:references
$ rake db:migrate
~~~


The command generates the following migration files:



~~~
class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :author
      t.text :content

      t.timestamps null: false
    end
  end
end
~~~


And the `post_id` column for the `post` reference:



~~~
class AddPostToComment < ActiveRecord::Migration
  def change
    add_reference :comments, :post, index: true, foreign_key: true
  end
end
~~~


Then you need to modify the following code:

In the `routes.rb` file, we want to make URL like: `/posts/:post_id/comments/:id`. We can do that by setting the routes to the following:



~~~
resources :posts do
  resources :comments, except: [:new]
end
~~~


The `resources` means we want a Restful CRUD route on the given _resource_. `resources :posts` essentially means defining the following 7 routes. 



~~~
get 'posts' => 'posts#index'
get 'posts/new' => 'posts#new', as: 'new_post'
get 'posts/:id' => 'posts#show', as: 'post'
get 'posts/:id/edit' => 'posts#edit', as: 'edit_post'
post 'posts' => 'post#create'
patch 'posts/:id' => 'posts#update'
put 'posts/:id' => 'posts#update'
delete 'posts/:id' => 'posts#destroy'
~~~


You can see 8 lines here, which the `put` and `patch` is the same thing with an HTTP verb alias.


We need to describe the relationship in model. In the `app/models/comment.rb` file, we define a `belongs_to`:



~~~
class Comment < ActiveRecord::Base
  belongs_to :post
end
~~~


In the `app/models/post.rb` file, we define a `has_many`:



~~~
class Post < ActiveRecord::Base
  has_many :comments
end
~~~


We can test the model association in rails console: 



~~~
$ rails console
> c = Comment.new
> c.author = 'Sam’
> c.content = 'Hi there' 
> c.post = Post.first    # assign the post to the first post.
> c.save                 # it won’t commit to the database until we call save.
> 
> # a better approach:
> p = Post.first
> p.comments.count       # result: 1
> c = p.comments.new     # post_id of comment is auto assigned.
> c.author = 'Sam'
> c.content = 'Hi there’
> c.save
~~~


We want to display the comments when show a post. The `posts#show` is in charged to show a single post. In the `app/views/posts/show.html.erb` file, we append the following to the end of the HTML code.



~~~
<h2>Comments</h2>

<table>
  <thead>
    <tr>
      <th>Author</th>
      <th>Content</th>
      <th colspan="3"></th>
    </tr>
  </thead>

  <tbody>
    <% @post.comments.each do |comment| %>
      <tr>
        <td><%= comment.author %></td>
        <td><%= comment.content %></td>
      </tr>
    <% end %>
  </tbody>
</table>
~~~


—Thomas




