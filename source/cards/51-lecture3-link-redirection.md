---
cid: 51
date: 2016-05-19
title: Lecture 3—Link Redirection
---

In this example, we build a link shortener.

Here is what it can do.

- User can input a url into the system.
- User can also provide a desired short url to map the long url.
- The system saves the mapping as a record in database.
- whenever anyone access the short url, the system provides a 301 permanent redirect to the original url. 

## Time for action

1. Create a new rails project.
2. Scaffold a resource: Link. There are 2 columns: `original_url` and `short_url`.
3. Change the `routes.rb` file to map shorten url into Link controller

1. Create a new rails project

If you are using online IDE, choosing Z new ruby workplace is usually the fastest way to get started.

If you are using local development machine, you can call the `rails new <project_name>` to initialize the project. 

Note: if you prefer other database engine other than the default SQLite, you may specify it with the `-d` option. For example, `rails new <project_name> -d mysql`.

2. Scaffold the Link resource

The major resource in our application is Link. Esdentially, it stores the original url and shorten url. There may be extra fields. But we can add them later by using migration. These two fields are the required ones to make the web application works. 




~~~
$ rails generate scaffold Link original_url short_url
$ rake db:migrate
~~~



Then in the `routes.rb` file, we add a customize route to route the short url into the Link controller.




~~~
get ':url' => 'links#redirect'
~~~



The `redirect` is a new action in the Kink controller that we are going to implement. 

Make sure we place this route is placed after other routing rules. The higher route has higher pirority in the routes table.

Lets head to the `link_controller.rb` file.

We define a new method:




~~~
def redirect
  link = Link.where short_url: params[:url]
  if link.nil?
    raise "Not Found"
  end
  redirect_to link.original_url, status: 301
end
~~~




## Further functionality

We can further enhance the application. 

1. API to create shorten link. We can allow developer to provide the original URL and the application returns the shortened link in JSON format.
2. Counting how many link clicked. We can create a column to store how many redirection the system had called. On each redirection, it increases the count by 1.
3. We can allow Shorten hash link generating. Sometimes we have no idea on what shorten link to use. Er can detect if the short url is empty when crating the record, the Link model can generate a short hash for the record. 



