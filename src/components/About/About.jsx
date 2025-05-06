import React from 'react'

export default function About() {
  return <>
    <div className='bg-emerald-400 py-20 text-center text-white'>
                <h2 className='text-5xl my-3 p-10 font-bold'>About Component</h2>
                <div className='w-1/5 mx-auto'>
                <div className='star text-center'>
                    <i className='fa-solid fa-star text-white text-2xl'></i>
                </div>
            </div>
                <div className='flex flex-wrap justify-center text-start'> 
                <p className='mt-4 sm:w-full md:w-1/3 p-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                <p className='mt-4 md:w-1/3 sm:w-full p-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
  </>
}
