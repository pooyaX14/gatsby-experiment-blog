import React from "react";
import Layout from '../components/layout';
import { graphql, useStaticQuery, Link} from 'gatsby'

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const titleDate = data.allMarkdownRemark.edges.map((edge, index) => {
    return (
      <li key={index}>
        <Link to={`/projects/${edge.node.fields.slug}`}>
          <h2>{edge.node.frontmatter.title}</h2>
          <p>{edge.node.frontmatter.date}</p>
        </Link>
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
  
