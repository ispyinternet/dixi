import { ArrowLeftIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

import PageView from '@/components/page-view'
import { Button } from '@/components/ui/button'
export const metadata: Metadata = {
  title: 'Dixi Maker',
  description: 'Make a custom Dixi',
  // icons: './muzki.jpg',
}
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-[#9394ff]">
        <div className="flex w-full p-5">
          <div className="w-1/3">
            <Link href="/">
              <Button variant={'block'} className="rounded-none flex items-center space-x-2">
                <ArrowLeftIcon className="size-5" />
                <span className="hidden sm:block">Back</span>
              </Button>
            </Link>
          </div>
          <div className="w-1/3 flex items-center justify-center">
            <h1 className="text-center text-3xl font-bold text-white">Dixi Maker</h1>
          </div>
          <div className="w-1/3" />
        </div>
        <PageView />
      </main>
    </>
  )
}
