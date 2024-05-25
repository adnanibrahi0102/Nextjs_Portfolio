import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='mt-5' id='contact'>
      <h1 className='lg:text-2xl sm:text-xl font-bold text-center'>
        Contact {' '}
        <span className='text-purple'>Me</span>
      </h1>
      <div className="flex  justify-center items-center mt-5">
        <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaInstagram size={32} />
          <span className="ml-1">Instagram</span>
        </a>
        <a href="https://www.linkedin.com/in/your_linkedin_profile" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaLinkedin size={32} />
          <span className="ml-1">LinkedIn</span>
        </a>
        <a href="mailto:your@email.com" className="mr-4">
          <FaEnvelope size={32} />
          <span className="ml-1">Mail</span>
        </a>
      </div>
      <div className="text-center mt-5 text-gray-500">
        Designed and Developed by Adnan Ibrahim
      </div>
    </div>
  );
};

export default Contact;
