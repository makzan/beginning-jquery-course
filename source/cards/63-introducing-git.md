---
cid: 63
title: Introducing Git
date: 2016-06-20
---


Now we have the files ready. What are the options to put the rails app on server?

- FTP upload?
- Git repo

In rails community, we normally use the git approach.

## What is Git?

Git is a source code management tool-chain with version control. It is created by Linus Torvalds, the man behind linux kernel.

[Github’s interactive course](http://try.github.io/) is a good place to get started learning git.

## Mini-Lab – “Try Git”

Finish the Github “[Try Git](http://try.github.io/)” course.

1. Open [http://try.github.io](http://try.github.io) in your browser.
2. Type the command from the grey box into shell prompt.
3. Check the files finder for the current working files.

Tips: You can click on the command in the grey box and the command will be typed into shell automatically.

## Apply git to our project

So how we apply the git in our project?

1. In shell, change directory into the rails app project.
2. `git init` the local repo.
3. `git add .` to add all the files to the repo.
4. `git commit -m "init repo with all files"` to commit the just added changes. It must comes with a message.
5. `git add the_changed_files` after every time some files are changed (if you need that changes)
6. `git commit -m "message here"` to commit the changes every time you make.

Please note that this all happen in your local device. Git repos are distributed so every one own a local code base. There are several benefits on this:

1. Can work in offline.
2. No centralized server.
3. Fast code changing. (branch switching)

## Push git to server repo

But you want a server? There are some git services.

- Github
- BitBucket

~~~
$ git remote add origin ssh://.......
~~~

Then every time when your local code are ready to push to the others:

~~~
$ git push origin master
~~~

Or use self hosted git service

1. You need a server, or VPS
2. SSH access
3. Setup Git repo
4.
We have used git init to make the current folder a git managed repo, with all the git controlling files put inside a .git directory. When we are creating our now git repo for others to use, we just want those git controlling files by using the `--bare` option.

~~~
$ mkdir a-new-repo.git
$ cd a-new-repo.git
$ git init --bare
~~~

Git is something powerful yet not easy to learn. Here are more resources to help you get started.

- [Git Book](http://git-scm.com/book/zh)
- [Git flow](http://nvie.com/posts/a-successful-git-branching-model/)