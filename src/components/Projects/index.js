import React, { Component } from 'react';
import projectsList from '../../data/projects/projectsList';
import './index.scss';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsList: projectsList
    }
  }

  render() {
    return (
      <div className="mb-3">
        {this.state.projectsList.map(project => (
          <div key={project.id} className="portfolio">
              <div className="portfolio__header">
                  <h3 className="portfolio__title"><span>{project.tag}</span> {project.title}</h3>
                  <div className="portfolio__links">
                      <a
                        className="portfolio__link portfolio__link--live ml-2"
                        href={project.url_live}
                        target="_blank" rel="noopener noreferrer"
                        title="go to website"
                      >
                        <i className="far fa-window-restore" /> Live
                      </a>
                      {project.url_git && (
                        <a
                          className="portfolio__link portfolio__link--git ml-2"
                          href="https://github.com/dmitriyaa/techdegree-project-9"
                          target="_blank" rel="noopener noreferrer"
                          title="go to git repository"
                        >
                          <i className="fab fa-github" /> Git
                        </a>
                      )}
                  </div>
              </div>
              <div className="portfolio__content">
                  <p className="portfolio__date">project completed at: <span>{project.completion_date}</span></p>
                  {project.description}
                  <div className="row no-gutters">
                      <div className="col-12 col-sm-8 col-lg-4 p-2 order-12 order-lg-1">
                          <a href={project.url_live} target="_blank" rel="noopener noreferrer">
                              <img
                                className="img-fluid portfolio__image"
                                src={project.img_mobile}
                                alt={`${project.title} mobile screenshot`}/>
                          </a>
                      </div>
                      <div className="col-12 col-sm-8 col-lg-8 p-2 order-1 order-lg-12">
                          <a href={project.url_live} target="_blank" rel="noopener noreferrer">
                              <img
                                className="img-fluid portfolio__image"
                                src={project.img_desktop}
                                alt={`${project.title} desktop screenshot`} />
                          </a>
                      </div>
                  </div>
              </div>
          </div>
        ))}
        </div>
    );
  }
}

export default Projects;
