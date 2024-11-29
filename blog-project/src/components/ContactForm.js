'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Banner from './Banner';

// Yup 유효성 검사 스키마
const schema = yup
  .object({
    email: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Email is required.'),
    subject: yup
      .string()
      .min(2, 'Please enter at least 2 characters!')
      .required('Subject is required.'),
    message: yup
      .string()
      .min(20, 'Please enter at least 20 characters!')
      .required('Message is required.'),
  })
  .required();

export default function ContactForm() {
  // useForm 초기화
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // yup을 유효성 검사기로 사용
  });
  const [banner, setBanner] = useState();
  // 폼 제출 핸들러
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setBanner({ message: 'Successfully submitted!', state: 'success' });
    setTimeout(() => {
      setBanner(null);
    }, 3000);

    // 실제 메일 전송 로직은 API 요청 등으로 처리
  };

  return (
    <section className='max-w-xl w-full mx-auto mt-10 p-6 bg-slate-600 shadow-lg rounded-xl'>
      <h2 className='text-2xl font-bold text-center mb-6'>Send Mail</h2>
      {banner && <Banner banner={banner} />}
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        {/* Email 입력 */}
        <div>
          <label htmlFor='email' className='block ext-md font-semibold mb-1'>
            Your Email
          </label>
          <input
            id='email'
            type='email'
            autoFocus
            className='w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:ring-blue-300'
            {...register('email')}
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
          )}
        </div>

        {/* Subject 입력 */}
        <div>
          <label
            htmlFor='subject'
            className='block text-md font-semibold mb-1 '
          >
            Subject
          </label>
          <input
            id='subject'
            type='text'
            className='w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring focus:ring-blue-300'
            {...register('subject')}
          />
          {errors.subject && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message 입력 */}
        <div>
          <label htmlFor='message' className='text-md font-semibold mb-1'>
            Message
          </label>
          <textarea
            id='message'
            rows='10'
            className='w-full block text-black px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'
            {...register('message')}
          />
          {errors.message && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.message.message}
            </p>
          )}
        </div>

        {/* 제출 버튼 */}
        <div>
          <button
            type='submit'
            className='w-full py-2 px-4 text-slate-700 font-bold bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-blue-300'
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
