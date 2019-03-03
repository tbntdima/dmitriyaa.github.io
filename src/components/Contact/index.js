// Dependencies
import React, { Component } from 'react';

// Custom components

// Styles
import './index.scss';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statur: '',
      response: '',
      name: '',
      email: '',
      message: '',
    }
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      status: 'processing'
    });

    fetch('https://formcarry.com/s/QySX-l5gug9', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        this.setState({
          status: 'done',
          response: 'Your message was successfully delivered.',
          name: '',
          email: '',
          message: ''
        });
      } else {
        this.setState({
          status: 'done',
          response: 'Whoos, something went wrong, please try again in a few minutes...'
        });
      }
    })
    .catch(err => {
      this.setState({
        status: 'done',
        response: 'Whoos, something went wrong, please try again in a few minutes...'
      });
    });

  }

  render() {
    return (
      <div>
        <div><a className="color--secondary" href="mailto:dmitriym44@gmail.com"><i className="far fa-envelope"></i> dmitriym44@gmail.com</a></div>
        <div>
            <p className="mt-3">{this.state.response}</p>
        </div>
        <form onSubmit={this.handleSubmit} className="contact-form">
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            value={this.state.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            value={this.state.message}
            onChange={this.handleChange}
            name="message"
            rows="4" cols="80"
            placeholder="Your Message"
            required
          />
          {this.state.status !== 'processing' ? (
            <button type="submit" className="contact-form__button">
              Send
            </button>
          ) : (
            <div className="contact-form__loader spinner-grow text-accent">
                <span className="sr-only">Loading...</span>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Contact;
