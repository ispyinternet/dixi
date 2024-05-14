import './globals.css'
import { Inter as FontSans, Press_Start_2P as PressStart2P } from 'next/font/google'
import { ReactNode } from 'react'

import { TooltipProvider } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})
const pressStart2P = PressStart2P({
  subsets: ['latin'],
  variable: '--font-press-start',
  weight: '400',
})
type RootLayoutProps = {
  children: ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-start antialiased',
          fontSans.variable,
          pressStart2P.variable,
        )}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
