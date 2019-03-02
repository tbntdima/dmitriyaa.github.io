// Dependencies
import React, { Component } from 'react';

// Custom components

// Styles
import './index.scss';


class Snippet extends Component {
  render() {
    return (
      <div>
        <div><a className="color--secondary" href="mailto:dmitriym44@gmail.com"><i className="far fa-envelope"></i> dmitriym44@gmail.com</a></div>
        <div id="contact-form__error">
            <p className="mt-3"></p>
        </div>
        <form id="contact-form" className="contact-form" action="/send/email" method="post">
          <input type="text" name="e_name"  placeholder="Your Name" required />
          <input type="email" name="e_email" placeholder="Your Email Address" required />
          <textarea name="e_message" rows="4" cols="80" placeholder="Your Message" required></textarea>
          <button id="contact-form__button" type="submit" className="contact-form__button">Send</button>
          <div id="contact-form__loader" className="contact-form__loader spinner-grow text-accent" role="status">
              <span className="sr-only">Loading...</span>
          </div>
        </form>
      </div>
    );
  }
}

export default Snippet;
