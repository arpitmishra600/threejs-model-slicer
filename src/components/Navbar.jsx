import React, { useState } from 'react'
import "./nav.css"
export default function Navbar() {
	const [hamOpen,setHamOpen]=useState(false)
	
  return (
    <div className='navfont flex justify-between border-b border-black'>
		<div className='flex'>
			<img src='./templogo.svg' className='w-[100px] h-[50px]' style={{flex:1}}></img>
	      <div className="navbar-container px-20 py-3 flex max-md:justify-end max-md:flex-col">
		<ul className='flex max-md:flex-col max-md:absolute right-0 top-0 max-md:h-[100vh] z-10 max-md:bg-[red]'>
			<li className="nav-link active-link max-md:p-10 ">
				<a href="#">Home
				</a>
				<div className="underline"></div>
			</li>
			<li className="nav-link max-md:p-10">
				<a href="#">Guides</a>
				<div className="underline"></div>
			</li>
			<li className="nav-link max-md:p-10">
				<a href="#">Take Assessment</a>
				<div className="underline"></div>
			</li>
			<li className="nav-link max-md:p-10">
				<a href="#">Contact</a>
				<div className="underline"></div>
			</li>
		</ul>
	</div>
		</div>
	

		<div>
      <button className="relative group" onClick={()=>setHamOpen(!hamOpen)}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${hamOpen && "translate-x-10"}`}></div>
            <div className={`bg-black h-[2px] w-7 rounded transform transition-all duration-300 ${hamOpen && "translate-x-10"} delay-75`}></div>
            <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${hamOpen && "translate-x-10"} delay-150`}></div>

            <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5  ${hamOpen && "-translate-x-10"} group-focus:translate-x-0 flex w-0 group-focus:w-12`}>
              <div className={`absolute bg-black h-[2px] w-5 transform transition-all duration-500 delay-300  ${hamOpen && "rotate-45 rotate-0"}`}></div>
              <div className={`absolute bg-black h-[2px] w-5 transform transition-all duration-500  delay-300  ${hamOpen && "-rotate-45 -rotate-0"}`}></div>
            </div>
          </div>
        </div>
      </button>
    </div>
    </div>
  )
}
