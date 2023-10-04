import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ActiveSectionContextProvider from '@/context/active-section.context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rizmiya | Portfolio',
  description: 'Rizmiya is a React Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-slate-50 text-gray-950 relative `}>

      {/*<body className={`${inter.className} bg-slate-50 pt-28  text-gray-950 relative h-[5000px] sm:pt-36`}> */}

      <div className="bg-[#88f3ad] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#86efac]"></div>
        <div className="bg-[#c9c3fa] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ActiveSectionContextProvider>
          
          
          {children}
        </ActiveSectionContextProvider>
        
      </body>
    </html>
  )
}

/*
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ActiveSectionContextProvider from '@/context/active-section.context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rizmiya | Portfolio',
  description: 'Rizmiya is a React Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-slate-50 text-gray-950 relative h-[5000px] `}>

      

      <div className="bg-[#88f3ad] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#86efac]"></div>
        <div className="bg-[#c9c3fa] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ActiveSectionContextProvider>
          <Header />
          
          {children}
        </ActiveSectionContextProvider>
        
      </body>
    </html>
  )
}


*/

/*<body className={`${inter.className} bg-slate-50 pt-28  text-gray-950 relative h-[5000px] sm:pt-36`}> */