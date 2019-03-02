// Dependencies
import React, { Component } from 'react';

// Custom components

// Styles
import './index.scss';


class Skills extends Component {
  render() {
    return (
      <ul className="skills-list transparent-little">
        <li className="skills-list__item">
          <i className="fab fa-html5"></i> HTML
        </li>
        <li className="skills-list__item">
          <i className="fab fa-css3-alt"></i> CSS
          <ul className="skills-list skills-list--inner">
            <li className="skills-list__item skills-list__item--inner"><a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass/Scss</a></li>
            <li className="skills-list__item skills-list__item--inner"><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a></li>
            <li className="skills-list__item skills-list__item--inner"><a href="https://en.bem.info/methodology/" target="_blank" rel="noopener noreferrer">BEM</a></li>
          </ul>
        </li>
        <li className="skills-list__item">
          <i className="fab fa-js"></i> JavaScript
          <ul className="skills-list skills-list--inner">
            <li className="skills-list__item--inner"><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a></li>
            <li className="skills-list__item--inner"><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">NPM</a></li>
            <li className="skills-list__item--inner"><a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack</a></li>
            <li className="skills-list__item--inner"><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a></li>
          </ul>
        </li>
        <li className="skills-list__item">
          <i className="fab fa-github"></i> Git
        </li>
        <li className="skills-list__item">
          <i className="fab fa-php"></i> PHP
          <ul className="skills-list skills-list--inner">
            <li className="skills-list__item skills-list__item--inner"><a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">Laravel</a></li>
            <li className="skills-list__item skills-list__item--inner"><a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">Wordpress</a></li>
          </ul>
        </li>
        <li className="skills-list__item">
          <i className="fab fa-adobe"></i> Adobe
          <ul className="skills-list skills-list--inner">
            <li className="skills-list__item skills-list__item--inner"><a href="https://www.adobe.com/products/photoshop.html">Photoshop</a></li>
            <li className="skills-list__item skills-list__item--inner"><a href="https://www.adobe.com/products/illustrator.html">Illustrator</a></li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default Skills;
