import React from 'react'
import profile from '../../assets/profile.jpg'

export default function Home() {
    return <>
        <div className='bg-emerald-400 py-30 text-center text-white'>
            <img src={profile} width={400} className='mx-auto rounded-full shadow-lg' alt="Home avatar" />
            <h2 className='text-5xl my-3 font-bold'>Mohamed Abdellah</h2>
            <div className='w-1/5 mx-auto'>
                <div className='star text-center'>
                    <i className='fa-solid fa-star text-white text-2xl'></i>
                </div>
            </div>
            <p className='mt-4'>Graphic Designer - Web Designer - Illustrator</p>
        </div>
    </>
}
