import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
      <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">About</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
  )
}


Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string
}

// Navbar.defaultProps={
//   title:'Set title here',
//   aboutText:'About text here'
// }




