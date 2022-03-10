import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Project from "./Project"
import Button from "../Buttons/Button"

const ProjectsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsProject(sort: { order: DESC, fields: dateOfLaunch }) {
        edges {
          node {
            generalPreviewPicture {
              fluid {
                src
              }
            }
            projectName
            projectDescription
            demoProjetLink
            slug
          }
        }
      }
    }
  `)

  const myprojectsList = data.allDatoCmsProject.edges.map(({ node }) => node)

  return (
    <div id="work" className="w-full my-10 md:my-24 flex flex-col">
      <h1 className="font-bold text-center rounded-md text-xl md:text-4xl px-2 md:mx-8">
        Why Working with WebContract?
      </h1>
      <div className="flex flex-col">
        {myprojectsList.map((project, index) => (
          <Project
            key={index}
            name={project.projectName}
            description={project.projectDescription}
            link={project.demoProjetLink}
          />
        ))}
      </div>
      <div className="mx-auto my-5">
        <Link to="/#contact">
          <Button content={"Let's Get Started!"} />
        </Link>
      </div>
    </div>
  )
}

export default ProjectsList
