import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, SEO, Hero, Navbar, Footer } from '../components'

const ContactPage = () => {

  
  return (
  
      <Layout>
        <SEO title="The Art Outside | Contact Us Page"/>
        <div className="all-content w-clearfix wf-section">
        <Hero/>
        <div className="main-column content">
        <Navbar/>
        
        <div className="section wf-section">
            <h3>Contact Us</h3>
            <p>
            The Art Outside is a community effort. No one person writes or creates awesome stuff. </p>
            <p>
            If you'd like to volunteer your time to this project, need help with an artist submission or have a suggestion, please send us a message!
            </p>
            <Wrapper className="form-wrapper w-form">
            <form 
             action="https://formspree.io/f/xgernnga"
             method="POST"
            
             >
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"/>
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="What&#x27;s your story?" id="message"></textarea>
              </div>
              <button type="submit" className="button">
                submit
              </button>
            </form>
         </Wrapper>
         </div>
         </div>
         </div>
         <Footer/>
      </Layout>
    
    
  )
}


const Wrapper = styled.div`
margin-top: 2rem;
input, textarea {
  width:80%;
  border: 0;
  border:2px solid #ccc; 
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 2.5rem;
  margin: 1rem 0 2rem 1rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.04);
  color: #0050b8;
  font-size: 1rem;
  font-weight: 300; 
}
textarea {
  resize: vertical;
  height: 150px;
}
label {
  display:block;
}

input:focus, textarea:focus {
  border: 1px solid #0050b8;
  box-shadow: inset 0 0 8px 0 transparent, 0 0 6px 0 transparent;
}
.button {
  display: inline-block;
  padding: 10px 23px;
  background-color: #000;
  -webkit-transition: background-color 250ms ease;
  transition: background-color 250ms ease;
  font-family: 'Roboto Condensed', sans-serif;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
}
.button:hover {
  background-color: #0050b8;
}
`

export default ContactPage
