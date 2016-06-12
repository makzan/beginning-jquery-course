---
cid: 61
title: Deployment
date: 2016-06-12
---

## Deploying options

So what server we can use to host rails app?

- Platform-as-a-Service, e.g. [Heroku](https://www.heroku.com/), [AWS EC2](http://aws.amazon.com/ec2/), [OpenShift](https://www.openshift.com/)
- Dedicated/VPS Server, e.g. [Linode](https://www.linode.com), [DigitalOcean](https://www.digitalocean.com), [Brightbox](http://www.brightbox.co.uk/)
- 3rd party setup service, e.g. [Cloud66](http://www.cloud66.com)

## Heroku getting started guide

- rails 4: [https://devcenter.heroku.com/articles/getting-started-with-rails4](https://devcenter.heroku.com/articles/getting-started-with-rails4)
- rails 5: [https://devcenter.heroku.com/articles/getting-started-with-rails5](https://devcenter.heroku.com/articles/getting-started-with-rails5)
- Addons: [https://addons.heroku.com](https://addons.heroku.com)

## Dedicated Server

There are quite a lot tutorials discussing how to deploy the rails app to linode. I found this one helpful to me.

[https://gist.github.com/jpantuso/1031946](https://gist.github.com/jpantuso/1031946)

Although the steps are based on linode, it should be quite similar to deploy on the other self-managed server.

## Monitoring Exceptions

~~~
# https://github.com/smartinez87/exception_notification
gem 'exception_notification', :require => 'exception_notifier'
~~~

## Deployment database config

We set the database connection configuration in the `database.yml` file. This is convenient in development environment. But in production, we would better put the database connection and secret out of the database configuration file. We can do that by putting the value in environment variable and use ENV to access them.

~~~
production:
  adapter: postgresql
  encoding: unicode
  pool: 5
  database: <%= ENV['APP_DATABASE'] %>
  username: <%= ENV['APP_USERNAME'] %>
  password: <%= ENV['APP_PASSWORD'] %>
  host: <%= ENV['APP_HOST'] %>
  port: <%= ENV['APP_PORT'] %>
~~~