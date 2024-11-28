import React from 'react';

export default function CategoryList({ categories, selected, onClick }) {
  return (
    <section className='text-white text-center p-4'>
      <h2 className='text-xl font-bold border-b border-sky-500 mb-2'>
        Category
      </h2>
      <ul className='flex flex-col w-100 border-yellow-200 text-white '>
        {categories.map((category) => {
          return (
            <li
              className={`text-lg cursor-pointer hover:text-sky-500 ${
                selected === category && 'text-sky-600'
              } `}
              key={category}
              onClick={() => onClick(category)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
