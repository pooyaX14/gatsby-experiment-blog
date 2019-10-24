import React from "react";
import Layout from '../components/layout';
import { graphql, useStaticQuery} from 'gatsby'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark{
        edges {
          node{
            frontmatter{
              title,
              date
            }
            
          }
        }
      }
    }
  `)
  const titleDate = data.allMarkdownRemark.edges.map((val, index) => {
    return (
      <li key={index}>
        <h2>{val.node.frontmatter.title}</h2>
        <p>{val.node.frontmatter.date}</p>
      </li>
    )
  })
  return (
    <Layout>
      <h1>Projects</h1>
      <p>These are some of the projects that I worked on in my free time.</p>
      <ol>
        {titleDate}
      </ol>
    </Layout>
  )
}

export default Projects;
  
