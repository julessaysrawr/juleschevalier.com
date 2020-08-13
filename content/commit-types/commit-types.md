---
path: '/commit-types'
date: '2020-03-21'
title: 'Commit Types'
featuredImage: "IMG_2236.jpg"
topic: 'Technology'
---

I was introduced to the idea of [commit types](https://github.com/commitizen/conventional-commit-types/blob/master/index.json), which has been a game changer for me.  As far as I can tell, the idea seems to have come from the Angular community, and is used if you want to contribute to [Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type).  There seems to be momentum behind standardizing [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), like [Semantic Versioning](https://semver.org/).

Benefits of using commit types:

- Makes commit messages be more meaningful
- Improved clarity around what is being committed
- Helped to ensure smaller commits
- Rebasing joy, when using squash and merge commits

An example of what commit history will look like when using this approach
```
abc1234 fix: removing ul list bullets from nav
abc1234 feat: renaming blog to articles and adding topics (#14)
abc1234 feat: adding npm script for listing scripts
abc1234 feat: adding emotion for link styling (#13)
abc1234 blog: adding new article and put all blogs in one dir
abc1234 feat: updating now page
abc1234 chore: update packages
abc1234 blog: adding new article: Busy
abc1234 fix: config cleanup
abc1234 fix: starting with one blog tag for now
```

A side note: Even if you are the only dev on a team, using "squash and merge" option on pull requests will make rebasing much less of a hassle when it gets complex.  Combining commit types with 

## How I use Commit Types

**Scenario:** I make a bunch of changes and I am ready to commit.  Now, what were those commit types again?

This happened _every time_ I wanted to commit something, so I created a shell alias to help with that.  In my dotfiles repo, I have `commit-types` file which contains

```
feat - A new feature
fix - A bug fix
docs - Documentation only changes
style - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
refactor - A code change that neither fixes a bug nor adds a feature
perf - A code change that improves performance
test - Adding missing tests or correcting existing tests
build - Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
ci - Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
chore - Other changes that don't modify src or test files
revert - Reverts a previous commit
```
In my shell profile I have the following aliases:

```
alias commit-types='cat ~/dotfiles/commit-types'
alias ct='cat ~/dotfiles/commit-types'
```

The aliases will print out the contents of the commit types file into my terminal.

So when I have my files staged and ready to commit, i just run `ct` or `commit-types` and it will list the commit types out for me. It helps me to use them all the time if they are at the tips of my fingers. 🎉

## Proposal

*This is me thinking out loud.  If you have any thoughts, please send me an [email](mailto:hellothere@juleschevalier.com)*

I have noticed that there are a few commit types I keep wanting to reach for that don't exist.

> **copy** - for text changes that are not content or CMS driven
>
> **content**: adding or updating articles or blog posts
>
> **style**: feels like it should be css changes, not linter changes
>
> **format**: might be good for linter/prettier changes instead of **style**

<!-- <br>
<br> -->

So I updated the commit-types dotfile to include:
```
style - css changes that do not effect the meaning of the code
format - linter/prettier auto-generated updates that do not effect meaning of code
content - adding or updating articles
copy - text changes not related to content
```



## Conclusion

Commit types have brought clarity to what I am commiting.  They have improved not only the commiting process but also the rebase process.  If this sounds like something that you might be interested in, I encourage you to try it out.

I am going to try out adding the proposed commit types in the repos I work the most in.  I'll report back how that goes in the future.
