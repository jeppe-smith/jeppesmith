import React from "react"

export const Project = props => {
  return (
    <div className="project">
      <div className="project__image-wrapper">{props.image}</div>
      <article className="project__article">
        <h3 className="project__title">{props.title}</h3>
        {props.children}
      </article>
    </div>
  )
}
