---
path: '/renaming-master-branch'
date: '2020-06-21'
title: 'Renaming Master Branch'
featuredImage: "IMG_0631.jpg"
topic: 'Technology'
---


The term "master" is widely is used throughout the tech industry, but it is a harmful metaphor that is a reminder of enslavement.  Instead, try using a `main` branch for your default branch.

## For An Existing Repo
First move your history to the main branch, because you don't want to lose it.
The `main` branch will be created for you
```
git branch -m master main
```

Then push the change to remote
```
git push -u origin main
```

## For A New Local Repo
```
git branch -M main
```

The add the remote and proceed from there.


## Changing The Default Branch In Github
You can update the settings to indicate this is your default branch for new repos

Settings > Branches > Default Branch