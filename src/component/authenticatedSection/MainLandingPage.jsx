import React from 'react'
import LandingPage from '../LandingPage'
import LeftLandingPage from '../LeftLandingPage'
import ApiCallAndState from './ApiCallAndState'

const MainLandingPage = () => {
  return (
    <div className='flex'>
        <div className="w-1/3 h-screen bg-black">
       <LeftLandingPage/>
       </div>
       <div className='w-2/3 h-screen '>
       <nav className='bg-black h-20  '>
           <ul>
           <div className='flex flex-row justify-end '>
                
                <li className='font-medium text-xl text-gray-400 font-sans ml-4 mt-5'>Explore</li>
                <li className='font-medium text-xl text-gray-400 font-sans ml-4 mt-5'>Premium</li>
                {/* <li className='font-medium text-xl text-gray-400 font-sans ml-4 mt-5'>Download</li> */}
<div className='mt-2 mr-3'>
<button class=" font-medium text-xl text-gray-400 font-sans ml-16">
 Open in
</button>
<button class="bg-white hover:bg-blue-700 text-black font-bold py-3 px-6 rounded-full ml-16 mt-1 ">
  Get App
</button>
</div>

           
        </div>
           </ul>
        </nav>
        <div className='h-screen w-screen bg-gradient-to-tr from-gray-600 via-gray-900 to-black rounded-lg'>
        <ApiCallAndState/>
        </div>
       </div>
      
    </div>
  )
}

export default MainLandingPage