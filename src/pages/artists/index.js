import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, AllArtists, SEO } from '../../components'

const index = () => {

  
  return (
    <Wrapper>
      <Layout>
      <SEO title="The Art Outside | Artists Page"/>
        <AllArtists/>

      </Layout>
    </Wrapper>
    
  )
}


const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`

export default index
