import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery} from 'gatsby'

export const query = graphql`
    query($slug: String) {
      markdownRemark(fields: {slug: {eq: $slug } }) {
        frontmatter {
          title
          date
        }
        html
      }
    }
  `

const Blog = (props) => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.title}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html} }></div>
    </Layout>
  )
}

export default Blog;

// Another method to display the data

/* 
// Write inside the component
const query = useStaticQuery(graphql`
    query($slug: String) {
      markdownRemark(fields: {slug: {eq: $slug } }) {
        frontmatter {
          title
          date
        }
        html
      }
    }
  `)
console.log("query is ", query)
console.log("props are ", props)
return (
  <h1>{props.data.markdownRemark.frontmatter.title}</h1>
  <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
)
*/