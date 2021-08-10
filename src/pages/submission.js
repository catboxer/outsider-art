import React from 'react'
import { Layout, Footer, SEO, Hero, Navbar } from '../components'

const SubmissionPage = () => {

  
  return (
    <Layout>
    <SEO title="The Art Outside | Contact Us Page"/>
    <div className="all-content w-clearfix wf-section">
    <Hero/>
    <div className="main-column content">
    <Navbar/>
    
    <div className="section wf-section">
      <h1>Submit An Artist</h1>
    <p>If you know of an artist who creates their work outside please do add them into our database.</p>
    <p>Our collection is sorely missing artists of color. I imagine it is because the books used to scout out the artists tend to unsee artists of color. Or due to redlining and other racist profiling far fewer people of color own property.</p>
    <p>It is only by seeing what has been left out can we repair our past. </p>
    <p>There is some basic formatting you need to follow. Below I include a description of each field.</p>
    <h2>Notes</h2>
      <ul>
        <li><strong>Name </strong> The name of the artist. Do not include any weird characters because their page is created dynamically using their name.</li>
        <li><strong>DOB</strong> Year of Birth to Year of Death. If the artist is living enter it as dob followed by a dash. e.g. 1966-.</li>
        <li><strong>Location</strong> City and state.</li>
        <li><strong>About</strong> A short, one paragraph summary that will be seen on the front page next to the cover photo. If their work involves topics around violence, sex or drugs please state that in this paragraph as a warning.</li>
        <li><strong>Biography</strong> The story of the artist. The field allows for formatting so please use it so that it will be easy to read.</li>
        <li><strong>Cover_img</strong> Your favorite image. Landscape is better but it will take either. Make sure it's something kids can see.</li>
        <li><strong>Gallery</strong> Images of their work of their work or of them.</li>
        <li><strong>Style</strong> A list of genres you can choose from. If you don't see the one you want ping us and I'll add it.</li>
        <li><strong>References </strong> The bibliography. Make sure to separate each entry by a pipe | or they'll all glob together.</li>
        <li><strong>Photo Credit</strong> Let us know who took the photos.</li>
        <li><strong>Interviewer</strong> Let us know who interviewed the artist. If it is yourself let us know we're hearing directly from you.</li>
        <li><strong>State</strong> This is the two letter abbreviation of the state the artist works in. I just threw this in so that if the database grows I can easily build a page to sort by state.</li>
      </ul>
  <iframe 
    className="airtable-embed" 
    src="https://airtable.com/embed/shrC2EXZrwRfEL7JO?backgroundColor=black"
    frameBorder="0" 
    width="100%" height="533" >
    </iframe>
    </div>
    </div>
    </div>
    <Footer/>
      </Layout>
  )}
  export default SubmissionPage