---
cid: 42
title: About config/initializers
date: 2016-05-05
---

Rails  automatically loads all the files inside `config/initializers` folder.

This follows the principle of convention over configuration. We don't need to tell Rails to load which files. All files there are executed on server runs.

<figure>
        <a class="attachment__link unstyled" target="_blank" href="https://public.3.basecamp.com/p/SNAQZbXzsUYCVioiG787ckiD/attachments/d9f833c1a971980b97fa8ee3f8ead7b70010/download/Screen%20Shot%202016-05-09%20at%205.25.46%20PM.png"><img  src="https://public.3.basecamp.com/p/SNAQZbXzsUYCVioiG787ckiD/blobs/BAh7CEkiCGdpZAY6BkVUSSIbZ2lkOi8vYmMzL0Jsb2IvNDY4NjA0MgY7AFRJIgxwdXJwb3NlBjsAVEkiC3B1YmxpYwY7AFRJIg9leHBpcmVzX2F0BjsAVEkiHTIwMTYtMDYtMDlUMDk6MzE6MTYuNTY3WgY7AFQ=--4cfed0be584c42885d9456d67f69bcb35cc3836e/preview" ></a>
    
      <figcaption class="attachment__caption">
        <a class="unstyled attachment__link" target="_blank" href="https://public.3.basecamp.com/p/SNAQZbXzsUYCVioiG787ckiD/attachments/d9f833c1a971980b97fa8ee3f8ead7b70010/download/Screen%20Shot%202016-05-09%20at%205.25.46%20PM.png">
      initializers folder.
</a>
      </figcaption>
    </span>
  </figure>

This encourages us create file for each initializing configurations. For example, we may have a file named `assets.rb` to configure the assets pipeline compilations. Then we may have another file named `devise.rb` to configure the Devise gem for user authentication.



