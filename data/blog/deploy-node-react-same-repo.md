---
title: How to deploy a Node Backend and React Frontend from the same repo
description: 
publishedDate: 2022/03/25
tags:
  - React
  - Node.js
  - Deployment
  - GitHub Pages
  - Heroku
---
Before I start this article, please note: This is in no way a thorough guide to deployment, especially not enterprise-level deployment. It is meant to help new developers who want to get their work online.

## The problem
Judging by the number of questions about this online, many self teaching developers have hit this roadblock: You've gone through [freeCodeCamp](https://www.freecodecamp.org/) or some other program and learned how to use Node / Express on the backend, and React on the frontend. You've deployed some Node apps, and some React apps. 

But now you want to build your own project, a React app that consumes an API. But how do you structure it? The two obvious choices are:

##### Two Repos
* Repo 1: Backend
  * .gitignore
  * package.json
  * /src
    * app.js
* Repo 2: Frontend
  * .gitignore
  * package.json
  * /src
    * App.jsx

##### One Repo
* Repo 1: Project
  * .gitignore
  * /backend
    * package.json
    * /src
      * app.js
  * /frontend
    * package.json
    * /src
      * App.jsx

Of course it is a legitimate choice to create separate repos for the backend and frontend, which avoids the issue that this article discusses. But there are also advantages to having everything in one repo.

## The solutions
There are fundamental ways of solving this
1. doing what i did for word-learn-order
2. creating a separate package.json file with deployment scripts in the root directory