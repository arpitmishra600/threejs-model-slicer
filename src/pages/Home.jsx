import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
//   window.addEventListener('scroll', function() {
//     var element = document.getElementById('statichead');
//     var elementRect = element.getBoundingClientRect(); // Get the element's position relative to the viewport
//     var viewportHeight = window.innerHeight; // Height of the viewport

//     if (elementRect.bottom < 0 || elementRect.top > viewportHeight) {
//         // Element has passed out of the window
//         console.log('Element has passed out of the window');
//     } else {
//         // Element is still visible in the window
//         console.log('Element is still visible in the window');
//     }
// });
  return (
    <div>
      <Navbar/>
      <section className=' max-sm:px-0 h-[100vh] flex items-center justify-center'>
        <div className='glassMorph bordergrad flex gap-[90px] flex-col p-7 w-[1024px]'>
        
            <div className='flex items-center max-sm:flex-col'>
                <h3 className='headingfont font-bold text-3xl flex-1 items-start w-full my-4'>Unleash<br/>Your Mental Marvels</h3>
                <p className='flex-1 max-md:text-sm max-sm:text-sm'>Embark on a path of self-discovery with Manasvikaar, where the journey begins within. Unlock your inner potential as you delve into therapy, receive expert guidance, engage in journaling, and set meaningful goals, all tailored to empower you as the catalyst for your own mental transformation.</p>
            </div>
            <div >
                <button className='buttonsgrad px-3 py-2 text-white navfont rounded-lg buttonshadow mr-6' >Book Online Session</button>
                <button className='my-5 px-3 py-2 text-black navfont rounded-lg buttonshadow' >Our Services</button>
            </div>
        </div>
      </section>


      <section className='px-[10%] md:px-[5%] max-sm:px-0 h-[100vh] flex items-center justify-center'>
        <img src='./yogagirl.svg'></img>
      </section>

      <section className='px-[12%] max-md:px-[5%] max-sm:px-0 flex flex-col items-center justify-center'>
      <h3 className='headingfont font-bold text-3xl flex-1 items-start w-full m-10 px-7 max-sm:text-center'>Welcome, to Manasvikar</h3>

      

      <div className='bordergrad glassMorph p-10'>
             <div className='flex flex-col gap-3 w-3/4 max-sm:w-full'>
        <p className=''>We're on a mission to make your mind marvelous. We provide a captivating blend of therapy, workshops, guides, and goal settings that will have you saying, "Wow, I'm unstoppable!"</p> 
        <p className=''>Our team of mental health wizards is here to sprinkle some enchantment on your journey to self-improvement. Get ready to unlock your potential and embrace a life filled with mental marvels. Welcome to Manasvikaar, where the magic of mental well-being comes alive!</p>
        <button className='w-[130px] px-3 py-2 text-black navfont rounded-lg buttonshadow mt-20 mb-10' >About us</button>
      </div>
      <span id='statichead' className='headingfont font-bold text-3xl flex-1 items-start w-full my-4 top-0 sticky max-sm:hidden' >Here’s how<br/>we help</span>
      <div className='flex border-t-2 flex-col items-end pt-10 pb-20'>
        
        <div className='first w-1/2 max-sm:w-full'>
        <h3 className='headingfont font-bold text-3xl flex-1 items-start w-full my-4'>Journaling</h3>
      <p className='text-sm pt-3 pb-20 pr-5'>Do you feel like your thoughts are a tangled mess? Journaling can be a quiet and comforting friend. Listen to your inner voice with our guided journaling prompts. It's a cozy corner just for you, where you can write freely, explore your feelings, and discover a lot as you watch your journey page by page.</p>
      <button className='buttonsgrad px-3 py-2 text-white navfont rounded-lg buttonshadow mr-6' >Book Online Session</button>
        </div>
      </div>

      <div className='flex border-t-2 flex-col items-end pt-10 pb-20'>
        <div className='w-1/2 max-sm:w-full'>
        <h3 className='headingfont font-bold text-3xl flex-1 items-start w-full my-4'>Guides</h3>
      <p className='text-sm pt-3 pb-20 pr-5'>Explore our library of clear and helpful guides on managing stress, anxiety, and more. Learn evidence based tips and techniques to build resilience and self-love, so you can navigate life's ups and downs with greater ease. Take charge of your well-being, one step at a time.</p>
      <button className='buttonsgrad px-3 py-2 text-white navfont rounded-lg buttonshadow mr-6' >Book Online Session</button>
        </div>
      </div>

      <div className='flex border-t-2 flex-col items-end pt-10 pb-20'>
        <div className='w-1/2 max-sm:w-full'>
        <h3 className='headingfont font-bold text-3xl flex-1 items-start w-full my-4'>Workshops</h3>
      <p className='text-sm pt-3 pb-20 pr-5'>Want to learn easy ways to feel better? Our workshops with mental health experts can help. We cover things like stress reduction, mindfulness, and communication, all in a friendly and supportive environment. Join us for a beautiful mental health journey.</p>
      <button className='buttonsgrad px-3 py-2 text-white navfont rounded-lg buttonshadow mr-6' >Book Online Session</button>
        </div>
        
      </div>  
      </div>
   

      </section>

      <section className='px-[10%] md:px-[5%] max-sm:px-0 h-[100vh] flex items-center justify-center'>
        <h3 className='headingfont font-bold text-3xl max-sm:text-center'>“You didn’t come this far, only to come this far”</h3>
      </section>

      <section className='px-[12%] max-md:px-[5%] max-sm:px-0 flex flex-col justify-center'>

        <div className='flex flex-col bordergrad p-10 '>
        <h3 className='headingfont font-bold text-3xl w-full items-start mb-10'>Here’s how we help</h3>
        <div className='flex gap-6 pt-10 border-t-2 max-sm:flex-col max-sm:gap-0 '>
            <div className='flex-1'>
            <h3 className='headingfont font-bold text-2xl w-full items-start mb-4 '>Counselling<br/>and Therapy Services</h3>
            <p className='text-sm pt-3 pb-20 pr-5'>Our experienced and compassionate therapists are here to support you on your journey towards mental and emotional well-being. Whether you're facing challenges,</p>
            </div>
            <div className='flex-1'>
            <h3 className='headingfont font-bold text-2xl w-full items-start mb-4'>Self-Helf<br/>Resources</h3>
            <p className='text-sm pt-3 pb-20 pr-5'>Explore our comprehensive Self Help resources, your path to empowerment and personal growth. Dive into a wealth of articles, tools, and guidance designed to inspire positive change in</p>
            </div>
        </div>
        <div className='flex gap-6 pt-10 border-t-2 max-sm:flex-col max-sm:gap-0'>
            <div className='flex-1'>
            <h3 className='headingfont font-bold text-2xl w-full items-start mb-4'>Art Therapy</h3>
            <p className='text-sm pt-3 pb-20 pr-5'>Our specialized approach combines artistic expression with therapeutic techniques, providing a unique way to explore and process emotions. No art skills needed – just an open heart. Our</p>
            </div>
            <div className='flex-1'>
            <h3 className='headingfont font-bold text-2xl w-full items-start mb-4'>Sound Groups</h3>
            <p className='text-sm pt-3 pb-20 pr-5'>Join our empowering Support Groups – a community where understanding and growth unite. Connect with individuals who share similar experiences, led by experienced facilitators. Gain insights, exchange</p>
            </div>
        </div>
        <div className='flex gap-6 pt-10 border-t-2 max-sm:flex-col max-sm:gap-0'>
            <div className='flex-1'>
            <h3 className='headingfont font-bold text-2xl w-full items-start mb-4'>Mental Health<br/>Assessments</h3>
            <p className='text-sm pt-3 pb-20 pr-5'>Prioritize your well-being with our comprehensive Mental Health Assessments. Our qualified professionals offer thorough evaluations to understand your unique</p>
            </div>
            <div className='flex-1'>
            <h3 className='headingfont font-bold text-2xl w-full items-start mb-4'>Educational<br/>Programs</h3>
            <p className='text-sm pt-3 pb-20 pr-5'>Embark on a journey of knowledge and growth with our enriching Educational Programs. Designed to ignite curiosity and inspire learning, our diverse range of</p>
            </div>
        </div>
        <div className='flex gap-6 pt-10 border-t-2 border-b-2 max-sm:flex-col max-sm:gap-0'>
            <div className='flex-1'>
            <h3 className='headingfont font-bold text-2xl w-full items-start mb-4'>Therapeutic<br/>Journaling</h3>
            <p className='text-sm pt-3 pb-20 pr-5'>Unlock healing and self-discovery through Therapeutic Journaling. This powerful practice combines the art of writing with introspection, promoting emotional well</p>
            </div>
            <div className='flex-1'>
            <h3 className='headingfont font-bold text-2xl w-full items-start mb-4'>Aim &<br/>Goal Setting</h3>
            <p className='text-sm pt-3 pb-20 pr-5'>Empower your aspirations with our Aim & Goalsetting program. Define your path, set clear objectives, and embark on a journey of achievement. Our structured approach</p>
            </div>
        </div>

        <button className='buttonsgrad w-[230px] px-3 py-2 text-white navfont rounded-lg buttonshadow mt-10 mb-5' >Book Online Session</button>
        </div>
        
      </section>
    </div>
  )
}
