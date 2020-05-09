import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Hero } from "../components/hero"
import { Projects } from "../components/projects"
import { Skills } from "../components/skills"
import { Work } from "../components/work"
import { Contact } from "../components/contact"
import { About } from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Projects />
    <About />
    <Skills />
    <Work />
    <Contact />
  </Layout>
)

export default IndexPage
