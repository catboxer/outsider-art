import React from "react"
import { graphql, Link } from "gatsby"
import setupTags from "../context/setupTags"
import Layout from "../components/Layout"
import slugify from 'slugify'
const Tags = ({data}) => {
  
   const newTags = setupTags(data.allAirtable.nodes)
    return (
        <Layout>
            <div>
                {newTags.map((tag, index)=>{
                    const [text, value]=tag
                    const slug = slugify(text,{lower:true} )
                    return(
<Link to={`/${slug}`} key={index}>{text}</Link>
                    )
                })}
            </div>
        </Layout>
    )
}

export const query = graphql`
  {
    allAirtable {
      nodes {
        data {
          style
        }
      }
    }
  }
`
export default Tags