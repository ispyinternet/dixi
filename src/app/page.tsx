import { Metadata } from 'next'
// import Image from 'next/image'
import Image from 'next/image'
import Link from 'next/link'

// import { Button } from '@/components/ui/button'
import { DEXSCREENER_URL, TELEGRAM_URL, TWITTER_URL } from '@/lib/utils'

// import PageView from '@/components/page-view'
export const metadata: Metadata = {
  title: 'Dixi CTO 2.0',
  description: 'Dixi CTO of the CTO',
  icons: './dixi-icon.png',
}
export default function Home() {
  return (
    <>
      <main className="flex w-full min-h-screen flex-col items-center bg-blue-700">
        <section
          className="flex w-full h-full min-h-screen flex-col items-center"
          style={{
            backgroundImage: `url('./main-banner.avif')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-wrap justify-center items-center py-5 space-x-10">
            <Link
              href={DEXSCREENER_URL}
              target="__blank"
              className="text-white text-lg hover:text-black hover:underline"
            >
              CHART
            </Link>
            <Link
              href={TWITTER_URL}
              target="__blank"
              className="text-white text-lg hover:text-black hover:underline"
            >
              TWITTER
            </Link>
            <Link
              href={TELEGRAM_URL}
              target="__blank"
              className="text-white text-lg hover:text-black hover:underline"
            >
              TELEGRAM
            </Link>
            <Link
              href={'/meme-maker'}
              className="text-white text-lg hover:text-black hover:underline"
            >
              DIXI MAKER
            </Link>
          </div>
        </section>
        <section
          className="w-full h-[1380px]"
          style={{
            backgroundImage: `url('./water-banner.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-wrap gap-2 justify-center items-center py-40 px-0 md:py-80 md:px-52">
            {Array.from({ length: 24 }).map((_, index) => (
              <div key={index} className="flex justify-center h-24 sm:h-40">
                <Image
                  className="size-24 sm:size-40"
                  src={`/dixi/dixi-${index + 1}.avif`}
                  alt={`image_${index}`}
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-2">
            <span className="text-white">Try the</span>
            <Link
              href={'/meme-maker'}
              className="text-white text-lg hover:text-black hover:underline"
            >
              Dixi Maker
            </Link>
          </div>
        </section>
        <section
          className="w-full h-[967px] flex justify-center"
          style={{
            backgroundImage: `url('./end-banner.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex flex-col w-full max-w-screen-md items-center mt-40">
            <h1 className="text-3xl text-white mb-5">ABOUT</h1>
            <span className="text-xl text-white px-5">
              {`Dixi - the first pixelated dog meme coin on solana.DIXI IS MORE THAN JUST ANOTHER
            MEMECOIN - IT'S A MOVEMENT. AND TOGETHER WE WILL PUSH IT HIGH TO WHERE IT BELONGS
            ALONGSIDE HIS ARCH RIVAL PIXI.`}
            </span>
          </div>
        </section>
        <section
          className="w-full h-[720px] flex justify-center"
          style={{
            backgroundImage: `url('./footer-banner.avif')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex space-x-5 w-full max-w-screen-md items-center justify-center">
            <Link href={DEXSCREENER_URL} target="__blank">
              <Image
                className="size-24 sm:size-40"
                src={`/dex-block.avif`}
                alt={`dex_block`}
                width={200}
                height={200}
              />
            </Link>
            <Link
              href={TWITTER_URL}
              target="__blank"
              className="text-white text-lg hover:text-black hover:underline"
            >
              <Image
                className="size-24 sm:size-40"
                src={`/x-block.avif`}
                alt={`x_block`}
                width={200}
                height={200}
              />
            </Link>
            <Link
              href={TELEGRAM_URL}
              target="__blank"
              className="text-white text-lg hover:text-black hover:underline"
            >
              <Image
                className="size-24 sm:size-40"
                src={`/telegram-block.avif`}
                alt={`telegram_block`}
                width={200}
                height={200}
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
