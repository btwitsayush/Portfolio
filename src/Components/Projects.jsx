import React from 'react'
import Js from '../Assests/Images/javascript.png'

const Projects=()=> {
    const imgArr=[
        {
            id:1,
            logo:Js,
            name:"Js"
        },
        {
            id:2,
            logo:Js,
            name:"Js"
        },
        {
            id:3,
            logo:Js,
            name:"Js"
        },
        {
            id:4,
            logo:Js,
            name:"Js"
        },
    ]
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
    <h1 className="text-3xl font-bold mb-5">Projects</h1>
    <div className='grid grid-cols-1 md:grid-cols-3'>
        {imgArr.map(({id,logo,name})=>{
            return(
                <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 my-10">
  <div
    class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
    className="w-full h-full object-cover"
      src={logo}
      alt="card-image" />

  </div>
  <div class="p-6">
    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div class="p-6 pt-0 flex justify-between">
    <button
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Preview
    </button>
    <button
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Sorce Code 
    </button>
  </div>
</div>  

            )
        })}
    </div>



    </div>
    </>
  )
}

export default Projects