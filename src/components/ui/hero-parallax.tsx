'use client'
import { MotionValue, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full flex flex-col items-center text-center z-10">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        $dixi <br />
      </h1>
      <h4 className="max-w-2xl md:text-xl mt-8 text-white text-center">
        The First Pixel dog on Solana.
      </h4>
      <Link className="mt-5 text-white hover:text-black" href={'/meme-maker'}>
        Go to Dixi Maker
      </Link>
    </div>
  )
}

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 8)
  const secondRow = products.slice(8, 16)
  const thirdRow = products.slice(16, 24)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig)
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  )
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.05], [0.05, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig)
  return (
    <div
      ref={ref}
      className="h-[180vh] overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-10 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-80 w-[15rem] relative flex-shrink-0"
    >
      <Image
        src={product.thumbnail}
        height="300"
        width="300"
        className="object-cover object-left-top absolute inset-0 rounded-xl"
        alt={product.title}
      />
    </motion.div>
  )
}
