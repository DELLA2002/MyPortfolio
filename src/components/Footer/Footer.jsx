import React from 'react'

export default function Footer() {
    return <>
        <footer className='relative bottom-0 right-0 left-0'>
            <div className="upper-footer p-10 bg-sky-900 flex flex-wrap justify-around text-center text-white items-center">
                <div className='sm:w-full md:w-1/2 lg:w-1/3 p-10'>
                    <h2 className='font-bold text-2xl'>LOCATION</h2>
                    <p>2215 John Daniel Drive</p><br />
                    <p>Clark, MO 65243</p>
                </div>
                <div className='sm:w-full md:w-1/2 lg:w-1/3 p-10'>
                    <h2 className='font-bold text-2xl'>AROUND THE WEB</h2>
                    <i className='m-1 rounded-4xl border p-2 text-lg fab fa-facebook'></i>
                    <i className='m-1 rounded-4xl border p-2 text-lg fab fa-twitter'></i>
                    <i className='m-1 rounded-4xl border p-2 text-lg fab fa-linkedin'></i>
                    <i className="m-1 rounded-4xl border p-2 text-lg fa-solid fa-globe"></i>
                </div>
                <div className='sm:w-full md:w-1/2 lg:w-1/3 p-10'>
                    <h2 className='font-bold text-2xl'>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            <div className="lower-footer py-5 text-center bg-teal-900 text-white">
                <p>Copyright © Your Website 2021</p>
            </div>
        </footer>
    </>
}
