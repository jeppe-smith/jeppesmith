import React from "react"
import MailIcon from "../../assets/mail.svg"
import CallIcon from "../../assets/call.svg"

export const Contact = () => (
  <section className="contact" id="contact">
    <header className="skills__header">
      <h2 className="header__title">GET IN TOUCH</h2>
    </header>
    <p className="contact__text">
      We can talk about your business, programmin, or how much we miss watching
      football (and managing our fantasy teams 😭) - anyhting really!
    </p>
    <div className="contact__links">
      <a href="mailto:mail@jeppesmith.dk" className="contact__link">
        <MailIcon width="1.5rem" />
        mail@jeppesmith.dk
      </a>
      <a href="tel:+4526706838" className="contact__link">
        <CallIcon width="1.5rem" />
        +45 26 70 68 38
      </a>
    </div>
  </section>
)
