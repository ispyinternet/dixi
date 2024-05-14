import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const DEXSCREENER_URL =
  'https://dexscreener.com/solana/gzc5heuwmgd6hsxmc4uonvkrzzqlp18rsf4ef4nwjhhb'
export const TELEGRAM_URL = 'https://t.me/officialdixi'
export const TWITTER_URL = 'https://twitter.com/DixiOnSol'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
