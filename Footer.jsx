import React from 'react'
import footerimage from '../Images/footerimage.png'
import Linkedin from '../Images/linkedin.svg'
import Twitter from '../Images/Twitter.svg'
import facebook from '../Images/Facebook.svg'
import Instagram from '../Images/instagram.svg'


const Footer = () => {
  return (
    
    <div className="bg-footorbgColor  p-4 md:p-8">

      <div className='border-y-[1px] border-gray-500 text-white flex flex-col md:flex-row items-center justify-between p-4 md:p-8'>

      <div className='text-center md:text-left'>
      <img src={footerimage} alt="footer-logo" className="mx-auto md:mx-0" />
      <p className='m-4 font-thin'>© R Singhania</p>
      </div>
      
      <div className='flex flex-col md:flex-row justify-around gap-4 md:gap-20 text-center'>
        <div>
          <h5 className='font-bold mb-3'>Company</h5>
          <div className='flex flex-col text-center md:text-left'>
          <a href="/" className='font-thin mb-2'>About</a>
          <a href="/" className='font-thin mb-2'>FAQ</a>
          </div>
          
        </div>
        <div>
          <h5 className='font-bold mb-3'>Terms</h5>
          <div className='flex flex-col text-center md:text-left'>
          <a href="/" className='font-thin mb-2'>Data privacy</a>
          <a href="/" className='font-thin mb-2'>Terms</a>
          <a href="/" className='font-thin mb-2'>Accessibility</a>
          </div>
          
        </div>
        <div>
          <h5 className='font-bold mb-3'>Related</h5>
          <div className='flex flex-col text-center md:text-left'>
          <a href="/" className='font-thin mb-2'>Find Buyer</a>
          <a href="/" className='font-thin mb-2'>Feedback</a>
          </div>
          
        </div>
      </div>
      <div className='flex flex-row gap-5'>
        <img src={Linkedin} alt="linkedin-logo" />
        <img src={Twitter} alt="Twitter-logo" />
        <img src={facebook} alt="facebook-logo" />
        <img src={Instagram} alt="instagram-logo" />
      </div>
    </div>
    </div>
    
  );
};

export default Footer;