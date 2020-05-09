import React from "react"
import ArrowForwardIcon from "../../assets/arrow-forward.svg"

export const Hero = () => (
  <div className="hero" id="the-top">
    <div className="hero__inner">
      <p className="hero__text hero__text--top">Hello there! I'm Jeppe, a</p>
      <h1 className="hero__title">frontend developer</h1>
      <p className="hero__text hero__text--bottom">
        living in beautiful Odense, Denmark.
      </p>
      <a href="#projects" className="hero__button">
        View my work
        <ArrowForwardIcon width="1rem" />
      </a>
    </div>
  </div>
)
