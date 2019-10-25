// it's a gatsby node config file whicg allows us to tap into node APIs which
// gatsby exposes
/* 
  This is what we're gonna use to generate slugs and dynamically created pages
*/

/*
onCreateNode ->  helps us to attach some additional data to individual Node like we're
gonna attach the slug
Node -> data structure to store gatsby data
Whenever a new md file is created we're gonna add slug which our filename without
the extension
 */ 
const path = require('path');

module.exports.onCreateNode = ({node, actions})  => {
  const { createNodeField } = actions;
  if(node.internal.type === 'MarkdownRemark') {
    const slug =  path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    // console.log(JSON.stringify(node, undefined, 4))
  }
  
}