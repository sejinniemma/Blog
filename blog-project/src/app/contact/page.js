import ContactForm from '@/components/ContactForm';
import ContactMe from '@/components/ContactMe';

export const metadata = {
  title: 'Contact Me',
  description: '꿀이에게 메일 보내기',
};

export default function ContactPage() {
  return (
    <div className='text-white flex flex-col items-center justify-center w-full '>
      <ContactMe />
      <ContactForm />
    </div>
  );
}
