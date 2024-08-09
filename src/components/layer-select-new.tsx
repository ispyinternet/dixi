'use client'
import { BanIcon, X } from 'lucide-react'
import Image from 'next/image'
import { useState, useRef } from 'react'

import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

type ItemInfo = {
  icon: string
  image: string
  name: string
}

type OnSelectProps = {
  url: string
  content?: string
}

type LayerSelectProps = {
  items: ItemInfo[]
  title: string
  selected: string
  onSelect: (data: OnSelectProps) => void
  contentInput?: {
    title: string
    placeholder?: string
  }
}

const LayerSelectNew = ({ items, title, selected, onSelect, contentInput }: LayerSelectProps) => {
  const [open, setOpen] = useState(false)
  const [contentInputValue, setContentInputValue] = useState(contentInput ? contentInput.placeholder : '')
  const contentInputRef = useRef(null)
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
                        onSelect({ url: item.image, content: contentInput ? contentInputValue : undefined })
                        setOpen(false)
                      }}
                    >
                      <Image src={item.icon} alt={item.name} width={200} height={200} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {contentInput ? 
               <div className='flex flex-col gap-3 mt-4'>
               <span className='font-semibold text-lg'>{contentInput.title ? contentInput.title : "Content"}</span>
               <textarea
                ref={contentInputRef}
                placeholder={contentInput.placeholder ? contentInput.placeholder : "Enter your content here"} 
                className="text-xs px-4 py-2 rounded-none border-[#9c4a00] border-4 outline-none placeholder-gray-500 resize-none h-[75px]" 
                maxLength={100}
                onChange={(e) => setContentInputValue(e.target.value)}
                value={contentInputValue}
               />
               <button 
                className="w-fit justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#e69c21] border-[#9c4a00] border-4 h-10 px-4 py-2 rounded-none flex items-center space-x-2"
                onClick={() => {
                  onSelect({ url: selected, content: contentInput ? contentInputValue : undefined })
                  setOpen(false)
                }}
               >Ok</button>
              </div>
            : ''}
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
                onSelect({ url: '' })
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
