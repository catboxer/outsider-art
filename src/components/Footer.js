import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper>
      <p>
      The ART OUT &copy; {new Date().getFullYear()} Don't Steal From Old People.
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  height: 3rem;
  display: grid;
  place-items: center;
  background: var(--clr-black);
  text-align: center;
  padding: .25rem;
  p {
    color: var(--clr-white);
    margin-bottom: 0;
    font-size: .75rem;
    @media (max-width: 576px) {
      font-size: 0.5rem;
    }
  }
`
export default Footer
