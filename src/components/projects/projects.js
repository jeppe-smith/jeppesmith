import React from "react"
import { Project } from "../project"
import { Image } from "../image"

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <header className="projects__header">
        <h2 className="header__title">PROJECTS</h2>
      </header>
      <div className="project-list-wrapper">
        <div className="project-list">
          <Project
            image={<Image image="betterFpl" alt="Better FPL" />}
            title="Better FPL"
          >
            <p>
              A chrome extension that helps Fantasy Premier League enthusiasts
              by adding additional data to the games site.
            </p>
          </Project>
          <Project
            image={<Image image="windyWings" alt="Windy Wings" />}
            title="Windy Wings"
          >
            <p>
              An AR app built with React Native for energy giant Ørsted where
              you can design your own windmill and place it in your
              surroundings.
            </p>
          </Project>
          <Project image={<Image image="pei" alt="TV2 PEI" />} title="TV2 PEI">
            <p>
              Play Editorial Interface (PEI) is a dashboard for content editors
              at TV2 to handle all of their programming on TV2 Play.
            </p>
          </Project>
          <Project
            image={<Image image="e2e" alt="TV2 Play E2E" />}
            title="TV2 Play E2E tests"
          >
            <p>
              Added E2E tests to the Play Web teams CI/CD pipeline to take the
              workload of repetitive tasks off the QA testers.
            </p>
          </Project>
          <Project
            image={<Image image="deloitte" alt="Deloitte" />}
            title="Deloitte FACT"
          >
            <p>
              A dashboard for Deloitte auditors to create audits and reports
              from templates greatly reducing time spent on such tasks.
            </p>
          </Project>
          <Project
            image={<Image image="odenseZoo" alt="Odense ZOO" />}
            title="Odense ZOO"
          >
            <p>
              I was the frontend developer on this team tasked with adding
              dynamic modules using Vue.
            </p>
          </Project>
        </div>
      </div>
    </section>
  )
}
