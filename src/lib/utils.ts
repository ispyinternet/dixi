import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const DEXSCREENER_URL =
  'https://dexscreener.com/solana/gzc5heuwmgd6hsxmc4uonvkrzzqlp18rsf4ef4nwjhhb'
export const DEXTOOLS_URL =
  'https://www.dextools.io/app/en/solana/pair-explorer/Gzc5heuwmGD6Hsxmc4UonVkRZZQLP18rsF4ef4nWjHhb?t=1716232854381'
export const INSTAGRAM_URL = 'https://www.instagram.com/dixi.cto'
export const TELEGRAM_URL = 'https://t.me/officialdixi'
export const TWITTER_URL = 'https://twitter.com/DixiOnSol'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
