import localFont from 'next/font/local'
import './globals.css'

export const metadata = {
  title: 'Hitesh Rana',
  description: 'Hey, I am Hitesh Rana DevOps enthusiast, Open Source Developer. Making things is one of my biggest obsessions, and improving them is even more of a passion for me. I create scalable, responsive, and user-friendly applications.',
}

const ttn = localFont({
  src: [
    {
      path: './fonts/TTNRegular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/TTNBold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/TTNRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/TTNBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ttn.className}>
      <head>
        <link rel="icon" href="/assets/hero.png" />
      </head>
      <body className='reveal-animation'>{children}</body>
    </html>
  );
}
