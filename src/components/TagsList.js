import React from 'react'
import setupTags from '../context/setupTags'
import {Link} from 'gatsby'
import slugify from 'slugify'
const TagsList =({artists=[]}) => {
const newTags = setupTags(artists)
    return <div>
      <h4>Genres</h4>
      <div>
        {newTags.map((tag, index)=> {
          const [text, value] = tag
          const slug = slugify(text,{lower:true} )
          return <Link to={`/${slug}`} key={index}>{text} ({value})</Link>
        })}
      </div>
    </div>

}

export default TagsList