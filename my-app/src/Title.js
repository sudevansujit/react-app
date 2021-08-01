import { NavLink } from 'react-router-dom'
import React from 'react'
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>Machinery Name</h1>
        <div></div>
      <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>
      <div></div>
      <div>
      <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        exact
        to="/">List</NavLink>
       
      <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        to="/about">About</NavLink>
          
          
      </div>
      </header>

    </div>
  )
}

export default Title