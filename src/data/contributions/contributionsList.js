import img1 from './images/webpack.svg';
import img2 from './images/laravel-mix.svg';

const contributionsList = [
  {
    id: 1,
    title: 'Webpack Based Project Backbone',
    faIcon: 'fa-github',
    url: 'https://github.com/dmitriyaa/webpack-project-backbone',
    description: [
      `Simple webpack based project backbone for small and medium projects. Designed to work both with plain html and width php server.`
    ],
    image: img1,
    image_subtitle: 'Webpack'
  },
  {
    id: 2,
    title: 'Laravel mix Scrollmagic GSAP Extension',
    faIcon: 'fa-npm',
    url: 'https://www.npmjs.com/package/laravel-mix-scrollmagic-gsap',
    description: [
      `In order to make ScrollMagic work with GSAP (TweenLite / TweenMax, TimelineLite / TimelineMax), it is nesessary to include animation.gsap.js plugin (scrollmagic docs).`,
      `However sometimes it gets a bit tricky with webpack.`,
      `In order to save you time to configure webpack, I've created this extension.`
    ],
    image: img2,
    image_subtitle: 'Laravel mix'
  },
];

export default contributionsList;
