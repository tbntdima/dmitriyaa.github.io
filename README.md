# Reimplimentation with blog

## Initial thoughts (1st of May 2019)

[The current version of website](https://github.com/dmitriyaa/dmitriyaa.github.io/tree/development) has all the content in a single page.

I want to expand it by adding a blog, but I don't want to create and setup a back-end server for this for a couple of reasons:

- I am a font-end developer and this is a good opportunity to practice with new technologies such as server rendering (next.js / gatsbyjs).

- I want to host the website on github pages, and don't want the backend to be somewhere else.

## Why I want a blog

- Initial inspiration came from Dan Abramov's website - [overreacted.io](https://overreacted.io/).

- I am constantly learning a lot of new material and I think describing it im my own words is a great way to:

  - consolidate the knowledge

  - document some thoughts for the later reread

  - share my understading with other guys who learn the same matrial

  - improve my writing skill

## Technologies Stack

- React

- Next.js

- Github pages

- Styled-components ??? + theming

- react-transition-group

- Formik - for email form, maybe I'll add subscription, try to connect to redux

- Redux - for globaly shared variables like theme mode

- Testing ???

## Technologies reasoning

So for now I've decided to utilise server rendering in order to implement the blog.

I am going to use Next.js or Gatsby (still need to do the research).

The usage of one of these frameworks is going to provide some side benefits, like SEO improvement and automatic code splitting.

I will try to use redux, but right now I don't see a place for it.

I want create a theming with two modes (light, dark). So I need to do the research here as well.

This time I am not going to use React-Bootstrap, all the components will be custom

## Installation and usage

- `yarn`

- `yarn dev`
