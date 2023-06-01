import React from 'react'
import logo from '../Logosmall.png'
import {Image} from 'react-bootstrap'

function Loader() {
  return (
    <div><div className="loader">
    <Image width={40} src={logo} />
  </div></div>
  )
}

export default Loader