import React from 'react'
import Navbar from './component/navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar/>

      <div className="main">
        <div className="top flex justify-center">
           <div className="div">
            <h1 className='text-white font-bold my-2 text-4xl  text-center'>QR Code Generator</h1>
            <h2 className='text-white font-semibold my-2 text-center'>An instant creation of a QR code with any content</h2>
           </div>
        </div>
        <div className="mid flex justify-center">
          <div className="div">
            <input type="text" placeholder='Write the content (link or text)' className=' md:w-96 w-72 bg-gray-400 py-2  px-2 outline-none my-3 text-white font-semibold placeholder:text-gray-200 rounded-l-md ' />
            <button className='px-4 py-2 bg-gray-500 text-white font-semibold rounded-r-md'>Create</button>
          </div>
        </div>
        <div className="buttom ">
        <div className='qr-container'>
          {/* title  */}
          <h2 className="qr-title text-center text-2xl text-white font-semibold mb-5">
          Here is Your QR!
          </h2>
          {/* anchor tag and img tag  */}
          <a className=' flex justify-center'>
            <img className='qr-image' src='' alt="QR code" />
          </a>
        </div>
              
        </div>
      </div>
    </div>
  )
}

export default App
