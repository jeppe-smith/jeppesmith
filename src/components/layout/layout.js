import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import { Header } from "../header"
import { Sidebar } from "../sidebar"

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Sidebar />
      <main>{children}</main>
    </>
  )
}
