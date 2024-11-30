// import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import './globals.css';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';
import { Description } from '@mui/icons-material';

export const metadata = {
  title: {
    default: '꿀이의 블로그',
    template: '꿀이의 블로그 | %s',
  },
  description: '풀스택 개발자 꿀이의 블로그',
  icons: {
    icon: '/favicon.ico',
  },
};

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
