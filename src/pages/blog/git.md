---
path: '/articles/git'
date: '2020-02-04'
title: 'Git Favorites'
topic: 'Technology'
---

## What changes have I added?
You probably know about `git diff` which lets you look at unstanged changes, but did you know that you can look at your staged changes as well?  🙌 Game changer!
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

## How I rebase
    git pull origin master --rebase  

    git push -f origin feature-branch # this will overwrite history - be careful