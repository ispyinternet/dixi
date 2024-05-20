'use client'
import { BanIcon, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

type ItemInfo = {
  icon: string
  image: string
  name: string
}

type LayerSelectProps = {
  items: ItemInfo[]
  title: string
  selected: string
  onSelect: (url: string) => void
}

const LayerSelectNew = ({ items, title, selected, onSelect }: LayerSelectProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="text-white font-semibold text-lg">{title}</div>
      <div className="flex">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <div className="size-24 border-[#9c4a00] border-4 bg-white">
              {selected !== '' ? (
                <Image src={selected} alt={selected} width={200} height={200} />
              ) : (
                <div className="flex justify-center items-center size-full">
                  <BanIcon className="size-10 text-[#9c4a00]" />
                </div>
              )}
            </div>
          </DialogTrigger>
          <DialogContent className="max-h-screen overflow-y-auto max-w-screen-md bg-[#e69c21] border-[#9c4a00] border-4 rounded-none sm:rounded-none">
            <div className="flex w-full flex-wrap">
              {items.map((item, index) => (
                <div key={index} className="w-1/4 p-2">
                  <div className="">
                    <button
                      disabled={selected === item.image}
                      className={`bg-white w-full h-full border-[#9c4a00] border-4 flex justify-center items-center ${selected === item.image ? 'opacity-75' : ''}`}
                      onClick={() => {
                        onSelect(item.image)
                        setOpen(false)
                      }}
                    >
                      <Image src={item.icon} alt={item.name} width={200} height={200} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
        <div>
          {selected !== '' &&
          selected !== '/body/abody.png' &&
          selected !== '/default/01blank.png' ? (
            <Button
              variant={'block'}
              size={'icon'}
              className="size-8"
              onClick={() => {
                onSelect('')
              }}
            >
              <X className="size-4" />
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
export default LayerSelectNew
