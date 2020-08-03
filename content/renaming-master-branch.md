---
path: '/renaming-master-branch'
date: '2020-06-21'
title: 'Renaming Master Branch'
topic: 'Technology'
---


The term "master" is widely is used throughout the tech industry, but it is a harmful metaphor that is a reminder of enslavement.  Instead, try using a `main` branch for your default branch.

First move your history to the main branch, because you don't want to lose it.
The `main` branch will be created for you
```
git branch -m master main
```

Then push the change to remote
```
git push -u origin main
```

Last step, if you use github is the update the settings to indicate this is your default branch.  

Settings > Branches > Default Branch