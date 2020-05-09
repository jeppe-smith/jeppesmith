import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
  query {
    betterFpl: file(relativePath: { eq: "better-fpl.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    odenseZoo: file(relativePath: { eq: "odense-zoo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 193) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    windyWings: file(relativePath: { eq: "windy-wings.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 193) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    e2e: file(relativePath: { eq: "e2e.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 193) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pei: file(relativePath: { eq: "pei.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 193) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    deloitte: file(relativePath: { eq: "deloitte.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 193) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const Image = props => {
  const data = useStaticQuery(query)

  return (
    <Img
      fluid={data[props.image].childImageSharp.fluid}
      alt={props.alt}
      title={props.title}
    />
  )
}
