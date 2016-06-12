---
cid: 57
title: Introducing jBuilder
date: 2016-06-12
---

In the past, we output JSON in controller.

~~~
format.json { render json: @jobs }
~~~

But it has been like a hacking with lot’s of nesting block while the JSON format grows.

But the controller JSON story is over. Now we can define how the data is formatted in JSON, as same as how the data is organized in HTML. This are done by a gem named “[JBuilder](https://github.com/rails/jbuilder)” from the official rails team. And it is now pre-installed in rails version 4.

In the `Gemfile`, uncomment the following line and `bundle install` it.

~~~
gem 'jbuilder'
~~~

JBuilder gem uses file extension `.json.jbuilder`. This follows the extension convention like .html.erb.

## Using jbuilder

In the `.json.jbuilder` file, we use `json` object to defile the output JSON node. the syntax in `json.any_name`, Then passing the value as argument.

For example, `json.id(@album.id)` will output `{id: 123}`

So, for the album show API, we can create a file named `show.json.jbuilder` inside `views/albums/` folder.

~~~
json.id @album.id
json.title @album.title
~~~

Or we can create a new node by using the `json.name {|json|   }` block.

The following is an album information with the user basic information.

~~~
json.id @album.id
json.title @album.title
json.created_at @album.created_at
json.link album_url(@album)
json.user do |json|
  json.id @album.user.id
  json.email @album.user.email
end
~~~

How about listind all the photos in the album?

~~~
json.photos @album.photos do |json, photo|
  json.id photo.id
  json.title photo.title
  json.image_url photo.file.url
  json.thumb_url photo.file.url(:thumb)
end
~~~



## Extracting view code to helpers

Helper is used to abstract view methods. It is designed for using in view.

`app/helpers/photos_helper.rb` file:

~~~
module PhotoHelper
  def absolute_photo_url(photo, style=nil)
    request.protocol + request.host_with_port + photo.file.url(style)
  end
end
~~~

So now, the photo url can be like this:

~~~
json.thumb_url absolute_photo_url(photo, :thumb)
~~~

## Partial json views

How about we need the photos JSON output in several API?

We can use partial too in the JSON JBuilder. Same as ERB partial that begins with an underscore `_partial.html.erb`.

Here is our `_photo.json.jbuilder` file. Please note that it only describe one photo object because the parent file handles the loop.

~~~
json.id photo.id
json.title photo.title
json.image_url absolute_photo_url(photo)
json.thumb_url absolute_photo_url(photo, :thumb)
~~~

And here is the full show.json.jbuilder file after using the partial.

~~~
json.data do |json|
  json.id @album.id
  json.title @album.title
  json.created_at @album.created_at
  json.link album_url(@album)

  # user
  json.user do |json|
    json.id @album.user.id
    json.email @album.user.email
  end

  # photos
  json.photos @album.photos do |json, photo|
    json.partial! photo
  end
end
~~~

Note: Since `json.any_name` will create `any_name` node, all json special method—such as `json.partial!`—uses the ! mark. Normally the `!` mark is used to indicate dangerous method that changes itself.