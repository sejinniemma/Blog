import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-bold '>Contact Me</h2>
      <p className='text-xl'>sejinniemma@gmail.com</p>
      <div className='flex flex-row'>
        {contactInfo.map((info, index) => {
          return (
            <Link
              key={index}
              href={info.link}
              className='text-2xl text-white mr-2 mt-2 cursor-pointer hover:text-sky-300'
            >
              {info.iconImg}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const contactInfo = [
  { iconImg: <FaGithub />, link: 'https://github.com/sejinniemma' },
  {
    iconImg: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/emma-j-128718214/',
  },
];
