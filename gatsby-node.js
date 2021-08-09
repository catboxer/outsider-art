const path = require('path')
const slugify = require('slugify')
exports.createPages = async({graphql, actions}) => {
    const {createPage} = actions
    const result = await graphql(`
    query GetStyles {
        allAirtable {
          nodes {
            data {
              style
            }
          }
        }
      }
      `)
      result.data.allAirtable.nodes.forEach(artist=>{
          artist.data.style.forEach(style => {
            const styleSlug = slugify(style, {lower:true})
                createPage({
                path:`/${styleSlug}`,
                component: path.resolve(`src/templates/style-template.js`),
                context: {
                    style: style,
                },
              })
          })
      })
}