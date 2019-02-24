// Dependencies
import React, { Component } from 'react';
import socialMediaList from '../../data/socialMediaList';

// Custom components

// Styles
import './index.scss';


class SocialIcons extends Component {
  render() {
    return (
      // display inline block
      <div className="social-icons">
          {
            socialMediaList.map(item => {
              return (
                <a
                  key={item.id}
                  className="social-icons__icon"
                  target="_blank" rel="noopener noreferrer"
                  href={item.url}
                >
                  <i className={`fab ${item.faIcon}`} />
                </a>
              );
            })
          }
      </div>
    );
  }
}

export default SocialIcons;
