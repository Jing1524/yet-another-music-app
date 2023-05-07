import Image from 'next/image'
import { useSelector } from 'react-redux'

import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import { TopPlay } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { activeSong } = useSelector((state: any) => state.player)
  return <Layout title="Home | Next.js + TypeScript"></Layout>
}
