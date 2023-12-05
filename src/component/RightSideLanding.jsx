import React from 'react'

const RightSideLanding = () => {
  return (
    <div>
        <nav className='bg-black h-20  '>
           <ul>
           <div className='flex flex-row justify-end '>
                
                <li className='font-medium text-xl text-gray-400 font-sans ml-4 mt-5'>Premium</li>
                <li className='font-medium text-xl text-gray-400 font-sans ml-4 mt-5'>Support</li>
                <li className='font-medium text-xl text-gray-400 font-sans ml-4 mt-5'>Download</li>
<div className='mt-2 mr-3'>
<button class=" font-medium text-xl text-gray-400 font-sans ml-16">
 Sign in
</button>
<button class="bg-white hover:bg-blue-700 text-black font-bold py-3 px-6 rounded-full ml-16 mt-1 ">
  Login
</button>
</div>

           
        </div>
           </ul>
        </nav>
    </div>
  )
}

export default RightSideLanding