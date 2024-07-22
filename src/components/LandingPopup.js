import React from 'react'

function LandingPopup() {
  return (
    <div>
        <div>
          <p className="text-xl text-center font-semibold">We’re here to help you find your best matches</p>
          <p className="text-sm	font-normal text-gray-800">
            We’ll ask you a series of questions about you so we can find your best product matches
          </p>
        </div>

        <button className="text-white font-medium py-2 px-4	rounded mt-3 w-full bg-stone-900" >
            Let’s get started!
          </button>
    </div>
  )
}

export default LandingPopup