---
path: '/learn-react'
date: '2021-05-16'
title: 'How to learn react in 2021'
summary: 'A learning roadmap for how to learn React in 2021'
featuredImage: 'IMG_6104.jpg'
featuredImageAlt: 'A Joshua Tree against a pale bly sky with dry desert grasses in the foreground and low mountains in the distance.'
topic: 'Technology'
---

## Opinionated advice

- Skip Redux. Unless you have specific problems with state management, you can use what is built into React: hooks & context.
- You don't need class components. Functional components and hooks are enough. It's okay if you build class components as part of tutorials, but know that is how things were done in _the before times_.
- Learn just enough to solve a specific problem. React can do a lot, but you don't need to know everything to get started. Begin with learning what you need to build a page. Then try a form or some other type of interactivity.
- Learn what modern Javascript can do so you understand what is js and what is React. There has been a lot of syntactic sugar added in the last 5 years to make it a nicer language to use. Section one of [this article](https://javascript.plainenglish.io/react-learning-roadmap-for-2021-a1c0f7456186) sums the new stuff up nicely.
- Styling - Do what you'll be most productive in to start. If you've used vanilla CSS, stick with that. Same for SCSS. Don't tackle [css-in-js](https://speakerdeck.com/vjeux/react-css-in-js) until you have a solid footing with React.

## Learning plan:

- Get comfortable with HTML, CSS and Javascript fundamentals
  - Including HTTP requests
- Modern javascript
  - Arrow functions
  - Template literals
  - Ternary Operator/Conditional Operator
  - Destructuring
  - Array methods
- React fundamentals
The [React docs](https://reactjs.org/docs/hello-world.html) do a great job introducing the main concepts.
  - jsx
  - [Thinking in components](https://reactjs.org/docs/thinking-in-react.html) & design for reusability
  - Props: passing in from parent and using in child
  - How to lift state up
  - Conditional show/hide
  - Using events: onClick, onChange, onSubmit, etc
  - State management
  - List data (from file and api)
- [React hooks](https://reactjs.org/docs/hooks-overview.html)
  - **useState**: to store and manage data within individual components
  - **useEffect**: to perform actions like HTTP requests or working with a browser API
  - **useRef**: to reference JSX elements
  - **useContext**: to access data from React Context to share data among components more easily [rather than passing props]
  - **useReducer**: to store and manage data across multiple components
- Fetching data from APIs
  - REST
  - GraphQL

## Courses

- [Udemy: Complete Javascript](https://massmutualdx.udemy.com/course/the-complete-javascript-course/) If you need to learn javascript, anything by this instructor is great.  He also has an [HTML & CSS](https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/) course.

- [Udemy: React-Redux](https://www.udemy.com/course/react-redux/) I did this one years ago, and it has been updated many times since.  I liked the way the instructor made things visual and the projects had good coverage of skills needed.

- [freeCodeCamp: React](https://www.freecodecamp.org/learn/front-end-libraries/#react).  You can also learn [HTML & CSS](https://www.freecodecamp.org/learn/responsive-web-design/).


## Beyond the basics

Once you get some confidence and get the hang of React, you'll need to figure out how to deploy into the wild.

- Production Ready Toolchains
    - [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) for single page apps
    - [Gatsby](https://www.gatsbyjs.com/) my personal favorite
    - [Next.js](https://nextjs.org/)
- Hosting
  - [Netlify](https://www.netlify.com/)
  - [Github pages](https://pages.github.com/)
  - AWS
- Routing
  - If you're using CRA, you'll likely need [routing](https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/) eventually.
  - Gatsby handles this for you
- Search
- [Testing](https://reactjs.org/docs/testing.html)

## Additional Resources

### People who I have learned a lot from:

[Kent C. Dodds](https://kentcdodds.com/blog/?q=react)

[Dave Ceddia](https://daveceddia.com/archives/)

<br />

<br />

### Further Reading
[The 7 Skills You Need To Know](https://www.freecodecamp.org/news/how-to-learn-react-skills-you-need-to-know/)

[react patterns](https://reactpatterns.com/)
