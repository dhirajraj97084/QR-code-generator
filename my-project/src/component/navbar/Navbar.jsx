import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="box bg-[#1f2937] py-3 shadow-md ">
        <div className="main">
            <div className="div">
                <img className='w-28 m-auto' src="/image/img.svg" alt="img" />
            </div>
            <div className="text flex justify-center">
                <h1 className='text-white font-bold text-xl'>React QR Code Generator</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
