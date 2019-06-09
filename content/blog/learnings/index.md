---
title: On road learnings
date: "2019-05-14"
tags: ["regular"]
description: (WIP) What I've learnet while building this blog with GatsbyJS
---

**POST IS NOT COMPLETED YET | IT'S ONLY A SKETCH**

This website is my first experience with GatsbyJS and I am still on the way of mastering React. So I've discovered, learned and understood a lot of interesting things while building it.

In this post I will try to document what I've learned on the road and what I am still struggling with.

## Typography.js

Here is a very good high level explanation of the concenpts: [http://kyleamathews.github.io/typography.js/what/](http://kyleamathews.github.io/typography.js/what/)

Quick summary:

- scale identifies the relationship between elements, for example is p is 16px, and ration is 2, then h1 is 32

- one rhythm is equal to one line-height

- vertical rhythm - margin bottom 1 rhythm on all elements

Links:

- [Typography docs](https://kyleamathews.github.io/typography.js/)

## Redux

I understand that redux isn't necessary for this project, since it's responsible for the theme toggling only. But I just wanted to practice with it.

Links:

- [Redux in Gatsby](https://medium.freecodecamp.org/how-to-get-started-with-gatsby-2-and-redux-ae1c543571ca)

## Rebassjs Grid

I am in a state when I haven't decided how to handle the layout.

In the very beginning I was avoiding CSS libraries, and did everything using [CSS Felxbox Model](https://www.w3schools.com/css/css3_flexbox.asp). Then once I got pretty comfortable with it I discovered [Bootstrap](https://getbootstrap.com/). It made the development 2-3 times easier and faster. So when I switched to React, without any hesitation I moved to [React-Boostrap](https://react-bootstrap.github.io/).

A short while ago I realised that it's not fair to stick to one library. So I'm experimenting with different layout libraries. I started with [rebass grid](https://github.com/rebassjs/grid), because it's compatible with [styled-components](https://www.styled-components.com/).

Eventually this library has some very cool features, like setting any proportion to the columns, easy setting of custom breakpoints and ability to pass properties in array for appropriate breakpoint.

Links:

- [Rebass Grid docs](https://github.com/rebassjs/grid)
