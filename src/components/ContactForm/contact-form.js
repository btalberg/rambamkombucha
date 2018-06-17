import React from 'react'
import { Container } from 'bloomer'

const ContactForm = () => (
  <form className="rb-form" method="POST" action="https://formspree.io/info@rambamkombucha.com">
    <div className="field">
      <label className="label">Email</label>
      <div className="control">
        <input className="input" type="email" name="email" placeholder="Your email" />
      </div>
    </div>

    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input className="input" type="name" name="name" placeholder="Your name" />
      </div>
    </div>

    <div className="field">
      <label className="label">Message</label>
      <div className="control">
        <textarea className="input" name="message" placeholder="Your message" />
      </div>
    </div>

    <div className="control">
      <button className="button is-link" type="submit">Send</button>
    </div>
  </form>
);

export default ContactForm;