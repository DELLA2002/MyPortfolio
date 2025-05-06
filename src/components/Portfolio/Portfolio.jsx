import React , { useState } from 'react'
const images = Object.values(import.meta.glob('../../assets/images/*.png' , {eager:true , as:'url'}));

export default function Portfolio() {
  const [IsModal, setIsModal] = useState(false);
  const [ImageSource, setImageSource] = useState('');
  return <>
            <div className='py-20 text-center'>
                <h2 className='text-5xl pb-5 pt-20 font-bold'>Portfolio Component</h2>
                <div className='w-1/5 mx-auto'>
                  <div className='port text-center text-slate-900'>
                      <i className='fa-solid fa-star text-2xl'></i>
                  </div>
                </div>
                <div className="row">
                  {images.map((image,index)=>
                    <div key={index} className='sm:w-full md:w-1/2 lg:w-1/3 p-10'>
                        <img src={image} className='img-layer w-full rounded-lg' alt="" 
                          onClick={(e)=> {setIsModal(true);
                            setImageSource(e.target.getAttribute('src'));
                          }}
                        />
                  </div>)}
                  {IsModal && <div  className='fixed inset-0 row bg-sky-950/25'>
                    <div onClick={()=>{setIsModal(false)}} className='absolute inset-0'></div>
                    <img src={ImageSource} className='w-1/2 relative' alt="" />
                  </div>}
                </div>
            </div>
  </>
}
