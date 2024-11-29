import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-bold mb-2'>Contact Me</h2>
      <p className='text-xl'>sejinniemma@gmail.com</p>
      <ul className='flex gap-2'>
        {LINKS.map((link, index) => {
          return (
            <a
              key={index}
              href={link.url}
              target='_blank'
              className='text-5xl text-white  mt-2 cursor-pointer hover:text-yellow-300'
            >
              {link.icon}
            </a>
          );
        })}
      </ul>
    </div>
  );
}

const LINKS = [
  { icon: <FaGithub />, url: 'https://github.com/sejinniemma' },
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/emma-j-128718214/',
  },
];
