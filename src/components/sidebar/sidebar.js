import React from "react"
import Menu from "../../assets/menu.svg"
import Beer from "../../assets/beer.svg"
import CodeSlash from "../../assets/code-slash.svg"
import Construct from "../../assets/construct.svg"
import Mail from "../../assets/mail.svg"
import Business from "../../assets/business.svg"
import Home from "../../assets/home.svg"
import { Link } from "gatsby"

export const Sidebar = () => (
  <div className="sidebar">
    <nav className="sidebar__nav">
      <Link to="#the-top" className="nav__item">
        <Home className="item__icon" />
        <p className="item__text">To the top</p>
      </Link>
      <Link to="#projects" className="nav__item">
        <Construct className="item__icon" />
        <p className="item__text">Projects</p>
      </Link>
      <Link to="#about" className="nav__item">
        <Beer className="item__icon" />
        <p className="item__text">About</p>
      </Link>
      <Link to="#skills" className="nav__item">
        <CodeSlash className="item__icon" />
        <p className="item__text">Skills</p>
      </Link>
      <Link to="#work" className="nav__item">
        <Business className="item__icon" />
        <p className="item__text">Work</p>
      </Link>
      <Link to="#contact" className="nav__item">
        <Mail className="item__icon" />
        <p className="item__text">Get in touch</p>
      </Link>
      <div className="nav__item nav__item--toggle">
        <Menu className="item__icon" />
      </div>
    </nav>
  </div>
)
