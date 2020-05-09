import React from "react"
import EcreoIcon from "../../assets/ecreo.svg"
import AbtionIcon from "../../assets/abtion.svg"

export const Work = () => (
  <section className="work" id="work">
    <header className="skills__header">
      <h2 className="header__title">WORK</h2>
    </header>
    <div className="workplace-list">
      <div className="workplace">
        <EcreoIcon className="workplace__logo" width="6rem" height="2rem" />
        <em className="workplace__period">Nov 2014 – Apr 2018</em>
        <p>
          I started at Ecreo while I was still studying and then got a full time
          position as a frontend developer.
        </p>
      </div>
      <div className="workplace">
        <AbtionIcon className="workplace__logo" width="6rem" height="2rem" />
        <em className="workplace__period">Apr 2018 –</em>
        <p>
          I work at Abtion as a senior frontend developer with a high focus on
          user interface development with javascript.
        </p>
      </div>
    </div>
  </section>
)
