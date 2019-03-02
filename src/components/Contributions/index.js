import React, { Component } from 'react';
import contributionsList from '../../data/contributions/contributionsList';
import './index.scss';

class Contributions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contributionsList: contributionsList
    }
  }

  render() {
    return (
      <div className="mb-3">
        {this.state.contributionsList.map(contribution => (
          <div key={contribution.id} className="contribution transparent-little">
            <div className="contribution__presentation">
              <img className="contribution__image" src={contribution.image} alt={contribution.image_subtitle} />
              <span className="contribution__title">{contribution.image_subtitle}</span>
            </div>
            <div className="contribution__description">
              <a
                className="contribution__link"
                href={contribution.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab ${contribution.faIcon}`}></i> {contribution.title}
              </a>
              {contribution.description}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Contributions;
