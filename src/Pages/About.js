import React from 'react'
import {useEffect} from 'react'

function About() {
  useEffect(() => {
    document.title = 'Knight Services - About Us'
   }, []);
  return (
    <div>About</div>
  )
}

export default About