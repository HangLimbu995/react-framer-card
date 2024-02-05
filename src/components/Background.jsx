import React from 'react'

const Background = () => {
  return (
    <div className='absolute w-full h-screen bg-zinc-800 flex flex-cols justify-center z-10'>
      <h3 className='text-zinc-500 font-semibold mt-9'>Documents</h3>
      <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900'>Docs.</h1>
    </div>
  )
}

export default Background