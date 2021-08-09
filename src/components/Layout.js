
import React, { useContext } from 'react'
import styled from 'styled-components'
import { GatsbyContext } from '../context/context'
const Layout = ({ children }) => {
  

  return (
    <>
      {children}

    </>
  )
}

// const Wrapper = styled.section`
// display: grid;
// grid-template-columns: repeat(2, 50%);
// grid-template-rows: 5rem 1fr 3rem;
// grid-column-gap: 0px;
// grid-row-gap: 0px;

// `
export default Layout
