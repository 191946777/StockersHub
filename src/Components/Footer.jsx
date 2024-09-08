import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-[#17153B] flex flex-wrap flex-col items-center justify-between p-7 bottom-0 w-full sm:flex-row gap-1'>
        <div className="footer-links flex sm:flex-col flex-row gap-2 ">
            <a className='text-white font-semibold text-xs sm:text-lg' to="#">Terms of Service</a>
            <a className='text-white font-semibold text-xs sm:text-lg' href="#">Privacy Policy</a>
        </div>
        <div className="contact-info items-center justify-center flex flex-col ">
            <p className='text-sm font-semibold text-white  sm:text-lg'><span className='text-white font-semibold text-md'>Contact us:</span> amansingh36645@gmail.com</p>
            <p className='text-white text-xs sm:text-lg'>© 2024 Aman Singh. All rights reserved.</p>
        </div>
        <div className="social-media flex flex-row text-white font-semibold text-xs gap-2 sm:text-lg sm:flex-col">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHuB</a> 
        </div>
    </footer>
    </>
  )
}

export default Footer
