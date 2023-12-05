import React from 'react'
import poster from './PosterData'
const RightContent = () => {
  return (
    <div>
        <div>
            <div className='flex justify-between '>
                <div className='m-4'>
                    <h1 className='font-bold text-2xl text-white'>Spotify Playlists</h1>
                </div>
                <div className='m-4'>
                    <h1 className='font-bold text-2xl text-white'>Show All</h1>
                </div>
            </div>
            {/* <div className='mt-4 h-36 bg-pink flex'>
                {poster.map((items)=>(
                    <div className='h-56 w-44 border border-pink-50'>
                        <img className='object-cover w-full h-full' src={items.image} alt=''/>
                    </div>
                ))}
            </div> */}
            <div className='mt-4 h-36 bg-pink flex justify-around '>
  {poster.map((items, index) => (
    <div className=' bg-gray-900 hover:bg-gray-800 h-[340px] w-48'>
        <div className='h-48 w-40  border rounded-xl group overflow-hidden m-4 relative hover:bg-black hover:bg-opacity-70 transition duration-200'>
      <img
        className='object-cover w-full h-full  '
        src={items.image}
        alt=''
      />
    </div>
    <div><h2 className=' ml-2 text-white font-semibold text-xl'>{items.text1}</h2></div>
    <div className='mt-2'><h2 className=' ml-2 text-white font-normal text-base'>{items.text2}</h2></div>
    </div>
  ))}
</div>

        </div>
    </div>
  )
}

export default RightContent
