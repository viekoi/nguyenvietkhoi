
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Sky from '@/components/Sky'
import About from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div className="col-span-full lg:col-span-3">
    <Sky/>
    <About/>
  </div>
}
