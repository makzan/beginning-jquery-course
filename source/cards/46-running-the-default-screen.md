---
cid: 46
date: 2016-05-06
title: Running the default screen
---

After setting up the rails environment, we can run the rails server by the following command:



~~~
$ rails server
~~~


Or in Cloud9, we want to specify the IP address and the port:



~~~
$ rails server -p $PORT -b $IP
~~~


Next, we can see the result through `http://0.0.0.0:3000` or the specified IP address and port.

<figure>
        <a class="attachment__link unstyled" target="_blank" href="https://public.3.basecamp.com/p/NvN1GdXHaXqXS5R34RzeM7nW/attachments/ebb18fb628732ee215490b39f26aeab80010/download/Screen%20Shot%202016-05-06%20at%202.44.46%20PM.png"><img  src="https://public.3.basecamp.com/p/NvN1GdXHaXqXS5R34RzeM7nW/blobs/BAh7CEkiCGdpZAY6BkVUSSIbZ2lkOi8vYmMzL0Jsb2IvNDYxNTg5MAY7AFRJIgxwdXJwb3NlBjsAVEkiC3B1YmxpYwY7AFRJIg9leHBpcmVzX2F0BjsAVEkiHTIwMTYtMDYtMDlUMTA6MTE6NDkuMTM2WgY7AFQ=--a8430ec8102ca3b435aa610964038f7895f8bb2f/preview" ></a>
    
      <figcaption class="attachment__caption">
        <a class="unstyled attachment__link" target="_blank" href="https://public.3.basecamp.com/p/NvN1GdXHaXqXS5R34RzeM7nW/attachments/ebb18fb628732ee215490b39f26aeab80010/download/Screen%20Shot%202016-05-06%20at%202.44.46%20PM.png">
      Welcome screen.
</a>
      </figcaption>
    </span>
  </figure>

Please note that the welcome screen in Rails 5 is changed:

<figure>
        <a class="attachment__link unstyled" target="_blank" href="https://public.3.basecamp.com/p/NvN1GdXHaXqXS5R34RzeM7nW/attachments/503a22e9ab42fec4aa37db7a1952504a0010/download/Screen%20Shot%202016-05-09%20at%204.48.12%20PM.png"><img  src="https://public.3.basecamp.com/p/NvN1GdXHaXqXS5R34RzeM7nW/blobs/BAh7CEkiCGdpZAY6BkVUSSIbZ2lkOi8vYmMzL0Jsb2IvNDY4NTAxMQY7AFRJIgxwdXJwb3NlBjsAVEkiC3B1YmxpYwY7AFRJIg9leHBpcmVzX2F0BjsAVEkiHTIwMTYtMDYtMDlUMTA6MTE6NDkuMTU0WgY7AFQ=--75244297c451a72c69a37f3e606d0a0bbf320e0b/preview" ></a>
    
      <figcaption class="attachment__caption">
        <a class="unstyled attachment__link" target="_blank" href="https://public.3.basecamp.com/p/NvN1GdXHaXqXS5R34RzeM7nW/attachments/503a22e9ab42fec4aa37db7a1952504a0010/download/Screen%20Shot%202016-05-09%20at%204.48.12%20PM.png">
      Welcome screen in Rails 5.
</a>
      </figcaption>
    </span>
  </figure>
