---
path: '/git'
date: '2020-02-04'
title: 'Git Favorites'
topic: 'Technology'
---

Here are a few helpful tricks that I enjoy while using git.  You can read more about the [basics](https://rogerdudler.github.io/git-guide/) if you haven't used git before.

## What changes have I added?
You probably know about `git diff` which lets you look at unstaged changes, but did you know that you can look at your staged changes as well?  🙌 Game changer!
```
git diff --staged
```

## There are different ways to view the log output

    git log --oneline

    git log --pretty=format:"%h - %an, %ar : %s"

    git log --pretty=format:"Commit Hash: %H, Author: %aN, Date: %aD"

## Delete multiple branches at the same time
```
git branch -d feature other-feature bug-fix moar-fixes
```

## Rebase over merge

*Be careful with this* - it will overwrite history.  I only use this on a branch where I am the only one adding commits.

    git pull origin main --rebase  

    git push -f origin feature-branch

*2020 update: I now use main for the default branch.  You can do that yourself by following [these three steps](/renaming-master-branch)*.

If you want to read more about rebasing and reasons to use it over merge, this is a great [explanation](https://dev.to/maxwell_dev/the-git-rebase-introduction-i-wish-id-had).