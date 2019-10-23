import React from "react"
import { Link } from "gatsby";
import Layout from '../components/layout';
import '../styles/index.scss'

const IndexPage =  () => {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h2>I'm Purnima, a full-stack developer living in beautiful city Bangalore, India.</h2>
      <p>Check out my <Link to="/projects">projects</Link></p>
      <p>Need a developer? <Link to='/contact'>Contact me.</Link></p>
    </Layout>        
  )
}

export default IndexPage;
