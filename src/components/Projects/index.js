import React, { Component } from 'react';

import './index.scss';


class Projects extends Component {
  render() {
    return (
      <div>
        <div class="portfolio">
            <div class="portfolio__header">
                <h3 class="portfolio__title"><span>Project</span> Web App Dashbord</h3>
                <div class="portfolio__links">
                    <a class="portfolio__link portfolio__link--live ml-2" href="https://dmitriyaa.github.io/techdegree-project-9/" target="_blank" title="check out website"><i class="far fa-window-restore"></i> Live</a>
                    <a class="portfolio__link portfolio__link--git ml-2" href="https://github.com/dmitriyaa/techdegree-project-9" target="_blank" title="check out git repository"><i class="fab fa-github"></i> Git</a>
                </div>
            </div>
            <div class="portfolio__content">
                <p>Personal project where I've built an interactive dashboard application, which uses advanced web techniques including SVG graphics and JavaScript libraries. The project involves <strong>creating charts</strong>, <strong>raphics</strong> and <strong>other UI components</strong> in a manner that promotes interactivity and usability.</p>
                <div class="row no-gutters">
                    <div class="col-12 col-sm-8 col-lg-4 p-2 order-12 order-lg-1">
                        <a href="https://dmitriyaa.github.io/techdegree-project-9/" target="_blank">
                            <img class="img-fluid portfolio__image" src="{{ asset('/frontend/images/portfolios/wad-m-1.jpg') }}" alt="web app dashboard mobile screenshot" />
                        </a>
                    </div>
                    <div class="col-12 col-sm-8 col-lg-8 p-2 order-1 order-lg-12">
                        <a href="https://dmitriyaa.github.io/techdegree-project-9/" target="_blank">
                            <img class="img-fluid portfolio__image" src="{{ asset('/frontend/images/portfolios/wad-d-1.jpg') }}" alt="web app dashboard desktop screenshot" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;
