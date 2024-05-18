'use client'
import { BanIcon } from 'lucide-react'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

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

const LayerSelect = ({ items, title, selected, onSelect }: LayerSelectProps) => {
  return (
    <>
      <div className="px-5 text-white font-semibold text-lg">{title}</div>
      <div className="px-16">
        <Carousel opts={{ slidesToScroll: 'auto' }}>
          <CarouselContent>
            <CarouselItem className="basis-1/3 sm:basis-1/4 lg:basis-1/6">
              <div className="p-1 h-full">
                <button
                  disabled={
                    selected === '' ||
                    selected === '/body/body-01.png' ||
                    selected === '/default/01blank.png'
                  }
                  className={`bg-white w-full h-full shadow-inner flex justify-center items-center ${
                    selected === '' ||
                    selected === '/body/body-01.png' ||
                    selected === '/default/01blank.png'
                      ? 'opacity-75'
                      : ''
                  }`}
                  onClick={() => {
                    onSelect('')
                  }}
                >
                  <BanIcon className="size-8 text-stone-700" />
                </button>
              </div>
            </CarouselItem>
            {items.map((item, index) => (
              <CarouselItem key={index} className="basis-1/3 sm:basis-1/4 lg:basis-1/6">
                <div className=" p-1">
                  <button
                    disabled={selected === item.image}
                    className={`bg-white w-full h-full shadow-inner flex justify-center items-center ${selected === item.image ? 'opacity-75' : ''}`}
                    onClick={() => {
                      onSelect(item.image)
                    }}
                  >
                    <Image src={item.icon} alt={item.name} width={200} height={200} />
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant={'block'} />
          <CarouselNext variant={'block'} />
        </Carousel>
      </div>
    </>
  )
}
export default LayerSelect
