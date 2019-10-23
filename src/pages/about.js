import React from "react"
import { Link } from "gatsby";
import Layout from '../components/layout';

const About =  () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I'm currently working as a React Mentor at Udacity</p>
      <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
    </Layout>
  )
}

export default About;
