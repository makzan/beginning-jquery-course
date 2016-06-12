---
cid: 59
title: Using Partial view
date: 2016-06-12
---

View filename that starts with underscore are called partial:

~~~
_form.html.erb
_nav.html.erb
~~~

When using render function, we specify the partial name without the underscore:

~~~
<%= render 'nav' %>
~~~

If the partial file is not in the same folder, say `views/layouts/_nav.html.erb`, we can include the path.

~~~
<%= render 'layouts/nav' %>
~~~

Sometimes we need to pass variable into partial. We can do that by specifing them in hash.

~~~
<%= render 'layouts/nav', key: 'value' %>
~~~