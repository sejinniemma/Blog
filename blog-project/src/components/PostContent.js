import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import MarkdownViewer from './MarkdownViewer';

export default function PostContent({ post }) {
  const { title, description, date, path, content } = post;
  return (
    <section className='flex flex-col p-4'>
      <div className='flex  self-end text-sky-600'>
        <FaRegCalendar />
        <p className='font-semibold ml-2'>{date.toString()}</p>
      </div>

      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='text-xl font-bold'>{description}</p>
      <div className='w-44 border-2 border-sky-600 mt-4 mb-8'></div>
      <MarkdownViewer content={content} />
    </section>
  );
}
