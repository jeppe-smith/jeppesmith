import React from "react"
import TSIcon from "../../assets/ts.svg"
import JSIcon from "../../assets/js.svg"
import RubyIcon from "../../assets/ruby.svg"
import CSSIcon from "../../assets/css.svg"
import HTMLIcon from "../../assets/html.svg"
import NodeIcon from "../../assets/node.svg"
import UmbracoIcon from "../../assets/umbraco.svg"
import DOIcon from "../../assets/digitalocean.svg"
import AWSIcon from "../../assets/aws.svg"
import ReactIcon from "../../assets/react-icon.svg"
import VueIcon from "../../assets/vue.svg"
import NestIcon from "../../assets/nestjs.svg"
import JestIcon from "../../assets/jest.svg"
import CypressIcon from "../../assets/cypress.svg"
import GatsbyIcon from "../../assets/gatsby.svg"

export const Skills = () => (
  <section className="skills" id="skills">
    <header className="skills__header">
      <h2 className="header__title">SKILLS</h2>
    </header>
    <div className="skill-lists">
      <ul className="skill-list">
        <li className="skill skill--title">The languages</li>
        <li className="skill">
          <TSIcon />
          Typescript
        </li>
        <li className="skill">
          <JSIcon />
          Javascript
        </li>
        <li className="skill">
          <RubyIcon />
          Ruby
        </li>
        <li className="skill">
          <CSSIcon />
          CSS3
        </li>
        <li className="skill">
          <HTMLIcon />
          HTML5
        </li>
      </ul>
      <ul className="skill-list">
        <li className="skill skill--title">The libraries</li>
        <li className="skill">
          <ReactIcon />
          React
        </li>
        <li className="skill">
          <VueIcon />
          Vue
        </li>
      </ul>
      <ul className="skill-list">
        <li className="skill skill--title">The frameworks</li>
        <li className="skill">
          <NestIcon />
          NestJS
        </li>
        <li className="skill">
          <ReactIcon />
          React Native
        </li>
        <li className="skill">
          <JestIcon />
          Jest
        </li>
        <li className="skill">
          <CypressIcon />
          Cypress
        </li>
        <li className="skill">
          <GatsbyIcon />
          Gatsby
        </li>
      </ul>
      <ul className="skill-list">
        <li className="skill skill--title">The other</li>
        <li className="skill">
          <NodeIcon />
          NodeJS
        </li>
        <li className="skill">
          <UmbracoIcon />
          Umbraco
        </li>
        <li className="skill">
          <DOIcon />
          Digital Ocean
        </li>
        <li className="skill">
          <AWSIcon />
          AWS
        </li>
      </ul>
    </div>
  </section>
)
