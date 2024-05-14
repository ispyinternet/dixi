import { Metadata } from 'next'

// import PageView from '@/components/page-view'
export const metadata: Metadata = {
  title: 'Dixi CTO 2.0',
  description: 'Dixi CTO of the CTO',
  // icons: './muzki.jpg',
}
export default function Home() {
  return (
    <>
      <main
        className="flex min-h-screen flex-col items-center bg-stone-400"
        style={{
          backgroundImage: `url('./main-banner.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div>Under construction</div>
      </main>
    </>
  )
}
