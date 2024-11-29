import React from 'react';

export default function Banner({ banner: { message, state } }) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '🔥';
  return (
    <p
      className={`p-2 text-black w-auto mb-4 rounded-xl text-center font-semibold ${
        isSuccess ? 'bg-green-300' : 'bg-red-300'
      }`}
    >{`${icon} ${message}`}</p>
  );
}
