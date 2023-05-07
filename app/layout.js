
import { Inter } from 'next/font/google'
import '@/styles/reset.css'
import '@/styles/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MFilm',
  description: 'Generated Mervan Uyar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"className={inter.className}>
      <body className='bg-zinc-900  ' >
       <Header/>
        {children}
       <Footer/>
        </body>
    </html>
  )
}
