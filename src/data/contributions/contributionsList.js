import React from 'react';

import react_logo from './images/reactjs.png';
import atom_logo from './images/atom.png';
import webpack_logo from './images/webpack.svg';
import laravel_mix_logo from './images/laravel-mix.svg';

const contributionsList = [
  {
    id: 'react_router_accordion_layout',
    title: 'React Router with Accordion Layout',
    faIcon: 'fa-github',
    url: 'https://github.com/dmitriyaa/react-router-accordion',
    description: (
      <div>
        <p>Code and explanation of how to combine React Router and Transition Group, in order to acheive functional accordion layout.</p>
        <p>For more details on the problem and solution please go to <a href="https://github.com/dmitriyaa/react-router-accordion" target="_blank" rel="noopener noreferrer">github repository</a>.</p>
        <p>Here is a <a href="https://dmitriyaa.github.io/react-router-accordion/"  target="_blank" rel="noopener noreferrer">live  demo</a></p>
      </div>
    ),
    image: react_logo,
    image_subtitle: 'React'
  },
  {
    id: 'webpack_project_backbone',
    title: 'Webpack Based Project Backbone',
    faIcon: 'fa-github',
    url: 'https://github.com/dmitriyaa/webpack-project-backbone',
    description: (
      <div>
        <p>Simple webpack based project backbone for small and medium projects. Designed to work both with plain html and width php server.</p>
        <p>Originally it was made to be used by my local office team colleagues in order to craft simple landing pages.</p>
      </div>
    ),
    image: webpack_logo,
    image_subtitle: 'Webpack'
  },
  {
    id: 'laravel_mix_scrollmagic_gsap',
    title: 'Laravel mix Scrollmagic GSAP Extension',
    faIcon: 'fa-npm',
    url: 'https://www.npmjs.com/package/laravel-mix-scrollmagic-gsap',
    description: (
      <div>
        <p>In order to make ScrollMagic work with GSAP (TweenLite / TweenMax, TimelineLite / TimelineMax), it is nesessary to include animation.gsap.js plugin (scrollmagic docs).</p>
        <p>However sometimes it gets a bit tricky with webpack.</p>
        <p>In order to save you time to configure webpack, I've created this extension.</p>
      </div>
    ),
    image: laravel_mix_logo,
    image_subtitle: 'Laravel mix'
  },
  {
    id: 'atom_settings',
    title: 'Atom Settings',
    faIcon: 'fa-github',
    url: 'https://github.com/dmitriyaa/atom-settings',
    description: (
      <div>
        <p>My colleagues often ask me what settings do I use for my atom editor. So I've decided to share it with everyone.</p>
      </div>
    ),
    image: atom_logo,
    image_subtitle: 'Atom'
  },
];

export default contributionsList;
