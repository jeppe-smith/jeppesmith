import React from "react"
import { Link } from "gatsby"

import Logo from "../../assets/jeppesmith.svg"

export const Header = () => (
  <div className="header">
    <Logo className="header__logo" />
    <nav>
      <Link to="#projects" className="header__link">
        Projects
      </Link>
      <Link to="#skills" className="header__link">
        Skills
      </Link>
      <Link to="#work" className="header__link">
        Work
      </Link>
      <Link to="#contact" className="header__link header__link--primary">
        Get in touch
      </Link>
    </nav>
  </div>
)
