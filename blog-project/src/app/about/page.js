import Profile from '@/components/Profile';
import { Stack, Typography } from '@mui/material';
import React from 'react';

export default function AboutPage() {
  return (
    <di className='flex flex-col mb-5'>
      <Profile />
      <section className='flex flex-col items-center w-full border-2  border-white justify-center  p-4 mt-8 shadow-xl rounded-md'>
        {myInfo.map((info, index) => {
          return (
            <div key={index} className='text-center mb-2 mt-2'>
              <h3 className='font-bold text-2xl text-gray-400'>{info.title}</h3>
              {info.desc.map((el, index) => {
                return (
                  <p key={index} className='text-lg text-white'>
                    {el}
                  </p>
                );
              })}
            </div>
          );
        })}
      </section>
    </di>
  );
}

const myInfo = [
  {
    title: 'Who Am I',
    desc: [
      '혼자서도 모든 서비스를 만들어 내고 싶은 풀스택 개발자',
      '먹는 것을 굉장히 좋아하는 꿀이',
    ],
  },
  {
    title: 'Career',
    desc: ['Miracle Studio(~Now)', 'Jueun-Edu Tech (~2024)'],
  },
  {
    title: 'Skills',
    desc: [
      'React, Next.js, JS Node',
      'MongoDB, MySQL, GraphQL, Firebase, AWS',
      'Git, VSCode',
    ],
  },
];
