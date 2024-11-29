import ContactForm from '@/components/ContactForm';
import ContactMe from '@/components/ContactMe';
import React from 'react';

export default function ContactPage() {
  return (
    <div className='text-white flex flex-col items-center justify-center w-full '>
      <ContactMe />
      <ContactForm />
    </div>
  );
}
