import React from 'react'
import "./nav.css"
export default function Navbar() {
  return (
    <div className='navfont d-flex'>
      <div className="navbar-container px-20 py-3">
	<ul>
		<li className="nav-link active-link ">
			<a href="#">Home
			</a>
			<div className="underline"></div>
		</li>
		<li className="nav-link">
			<a href="#">Guides</a>
			<div className="underline"></div>
		</li>
		<li className="nav-link">
			<a href="#">Take Assessment</a>
			<div className="underline"></div>
		</li>
		<li className="nav-link">
			<a href="#">Contact</a>
			<div className="underline"></div>
		</li>
	</ul>
</div>

    </div>
  )
}
