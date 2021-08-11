// import React from 'react'
// import TagsList from './TagsList'
// import ArtistList from './ArtistList'
// import Slider from './Slider'
// import { graphql, useStaticQuery} from 'gatsby'

// const query = graphql`
//   {
//     allAirtable {
//       nodes {
//         id
//         data {
//           name
//           about
//           biography {
//             childMarkdownRemark {
//               html
//             }
//           }
//           dob
//           gallery_name
//           location
//           references
//           style
//           gallery {
//             localFiles {
//               childImageSharp {
//                 gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
//               }
//             }
//           }
//           cover_img {
//             localFiles {
//               childImageSharp {
//                 gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const AllArtists =() => {
// const {allAirtable: {nodes:artists}} = useStaticQuery(query)
//     return (
//     <div>
//         <h1>this is all artists</h1>
//         <TagsList artists = {artists}/>
//         <Slider/>
//     </div>
//     )
// }

// export default AllArtists