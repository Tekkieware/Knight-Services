import React from 'react'
import {useEffect} from 'react'

function Services() {
  useEffect(() => {
    document.title = 'Knight Services - Our Services'
   }, []);
  return (
    <div>Services</div>
  )
}

export default Services