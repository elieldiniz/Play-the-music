import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google' //export font-famylly google font
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] }) //atribuindo fonte a variavael

export const metadata: Metadata = {
  title: 'ListMusic', //titulo do projeto
  description: 'Listen to music.', //descrisao do projeto
}


//layout do projeto 

//onde toda estrutura sera montada
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-slate-900 to-green-950 text-zinc-50`}> 
      {children}
      </body>
    </html>
  )
}
