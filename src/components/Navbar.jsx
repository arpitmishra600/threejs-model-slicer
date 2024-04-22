import React, { useState } from 'react'
import "./nav.css"
export default function Navbar() {
	const [hamOpen,setHamOpen]=useState(false)
	document.body.style.overflow=hamOpen?"hidden":"auto"
  return (
    <div className='navfont flex justify-between pt-7 max-md:pt-0 absolute w-[100%] max-md:absolute z-10'>
		<div className='flex'>
			<img src='./templogo.svg' className='w-[100px] h-[50px]' style={{flex:1}}></img>
	      <div className="navbar-container px-20 py-3 flex max-md:justify-end max-md:flex-col">
			<div className={`absolute h-[100vh] w-[100vw] border left-0 top-0 glassMorph z-10 ${hamOpen?"flex":"hidden"} `}></div>
		<ul className={`flex max-md:flex-col max-md:absolute right-0 top-0 max-md:h-[100vh] z-10 max-md:bg-[#00CCBE] max-md:${hamOpen?"flex":"hidden"} `}>
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
      <button className="group invisible max-md:visible relative" style={{zIndex:10}} onClick={()=>setHamOpen(!hamOpen)} onBlur={()=>{document.body.style.overflow="auto",setHamOpen(false)}}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${hamOpen && "translate-x-10"}`}></div>
            <div className={`bg-black h-[2px] w-7 rounded transform transition-all duration-300 ${hamOpen && "translate-x-10"} delay-75`}></div>
            <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${hamOpen && "translate-x-10"} delay-150`}></div>

            <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10  ${hamOpen && "translate-x-0"} group-focus: flex w-0 group-focus:w-12`}>
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
