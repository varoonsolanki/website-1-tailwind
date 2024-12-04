import React from 'react'

const About = () => {
  return (
     <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{backgroundImage: "url('/about-us-bg.jpg')"}}>
     <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
     <h2 className='text-4xl font-bold mb-4 text-black' data-aos="fade-up">About Us</h2>
     <p>Welcome to New Thar Mobile Zone! We are the largest and most trusted mobile phone store in Naukot Sindh . Our journey began 21 years ago, and since then, we have been showcasing the latest and best mobile phones and accessories to our customers.we are consists of experienced and trained professionals we will provide you with the best advice and assistance. We display the latest and best mobile phones that fit your budget and meet your requirements.We promise to provide our customers with the best service. You can contact us anytme, and we are always ready to assist you. Thank you for visiting New Thar Mobile Zone Naukot</p>
     </div>
     </section>
  )
}

export default About