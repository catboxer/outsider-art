import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import slugify from 'slugify'

const ArtistList =({artists=[]}) => {
    return <div>
        {artists.map((art)=>{
      const {name, about, cover_img, location, style } = art.data
      const slug = slugify(name,{lower:true} )
      return (
      <article key={art.id} className="item">
           <Link to={`/artists/${slug}`}>
    < GatsbyImage image={getImage(cover_img.localFiles[0])}
    alt={name} width="109" className="coverimage"></GatsbyImage>
        </Link>
         <h1>{name}</h1>
         <p>{location}</p>
         <p>{about}</p>
         {style.map((type,id)=>{
             return <div key={id}>{type}</div>
         })}
      </article>
    )
    })}
    </div>
}

export default ArtistList