// import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import './globals.css';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';

const myFont = localFont({
  src: '../utils/fonts/Pretendard.ttf',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={myFont.className}>
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto '>
        <Navbar />
        <main className='grow overflow-y-auto no-scrollbar px-2'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
