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
      <body className='flex flex-col w-full max-w-screen-3xl mx-auto b'>
        <Navbar />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
