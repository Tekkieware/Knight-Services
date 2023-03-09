import React from 'react'
import {useEffect} from 'react'

function Contact() {
  useEffect(() => {
    document.title = 'Knight Services - Contact'
   }, []);
  return (
    <div>Contact</div>
  )
}

export default Contact