'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode
  revealText?: string | React.ReactNode
  size?: number
  revealSize?: number
  className?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })
  const containerRef = useRef<HTMLDivElement | null>(null)

  const updateMousePosition = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }
  }

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', updateMousePosition)
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener('mousemove', updateMousePosition)
        }
      }
    }
  }, [])
  const maskSize = isHovered ? revealSize : size

  return (
    <motion.div
      ref={containerRef}
      className={cn('h-screen relative', className)}
      animate={{
        backgroundColor: isHovered ? 'rgb(147, 148, 254)' : 'rgb(147, 148, 254)',
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center md:text-3xl absolute bg-background bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      >
        <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />
        <div
          onMouseEnter={() => {
            setIsHovered(true)
          }}
          onMouseLeave={() => {
            setIsHovered(false)
          }}
          className="max-full px-32 mx-auto text-center text-white md:text-3xl font-bold relative z-20"
        >
          {children}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center  text-white">{revealText}</div>
    </motion.div>
  )
}
