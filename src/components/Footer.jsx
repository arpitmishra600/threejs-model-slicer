import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='flex justify-center items-center w-[100%] my-10'>
      <div className='flex flex-col w-[100%] max-w-[1000px] max-sm:flex-row'>
        <div className='flex navfont justify-between py-6 px-5 border-black border-b flex-wrap max-sm:border-r max-sm:border-b-0 gap-3'>
            <span className='flex gap-5 max-sm:flex-col'>
                <a>Home</a>
                <a>Guides</a>
                <a>Take Assessment</a>
                <a>Contact</a>
            </span>
            <a>Contact</a>
        </div>
        <div className='flex navfont justify-between border-b-1 border-gray py-6 px-5 flex-wrap gap-3'>
            <span className='flex gap-5 max-sm:flex-col'>
                <a>Privacy Policy</a>
                <a>Socials</a>
                <a>FAQs</a>
            </span>
            <a>All rights reserved</a>
        </div>
      </div>
    </section>
  )
}

export default Footer
