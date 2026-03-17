import React from 'react'

function Home() {
  return (
    <div className='p-8 mx-auto w-full flex justify-center items-center'>
      <div className="hover-3d">
  {/* content */}
  <figure className="max-w-100 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/creditcard.webp" alt="3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    </div>
  )
}

export default Home
