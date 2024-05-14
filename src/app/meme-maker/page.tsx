import { Metadata } from 'next'

import PageView from '@/components/page-view'
export const metadata: Metadata = {
  title: 'Dixi Maker',
  description: 'Make a custom Dixi',
  // icons: './muzki.jpg',
}
export default function Home() {
  return (
    <>
      <main
        className="flex min-h-screen flex-col items-center bg-stone-400"
        style={{
          backgroundImage: `url('./background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-center text-3xl font-bold text-white pt-5">Dixi Maker</h1>
        <PageView />
      </main>
    </>
  )
}
