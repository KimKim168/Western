import React from 'react'
import WesternLayout from './WesternLayout'
import ContactPage from './components/contactPage'
import WesternLayout2 from './WesternLayout2'

const Contact = () => {
  return (
    <WesternLayout2>
         <div className="relative w-full mt-24 md:mt-28">
            <img src={`/assets/buddhist/image1.jpg`} className="aspect-[21/6] w-full object-cover" alt={''} />
        </div>
        <div className='section-container'>
            <ContactPage/>
        </div>
    </WesternLayout2>
  )
}

export default Contact
