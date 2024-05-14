'use client'
import { DownloadIcon, ShuffleIcon, TimerResetIcon } from 'lucide-react'
import { useState } from 'react'

import CompiledImage, { Layers } from '@/components/compiled-image'
import LayerSelect from '@/components/layer-select'
import { Button } from '@/components/ui/button'
import inventory from '@/lib/inventory.json'

import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
const defaultInventory = Object.keys(inventory).reduce(
  (acc, inventoryKey) => ({
    ...acc,
    [inventoryKey]:
      inventoryKey === 'body'
        ? '/body/body-01.png'
        : inventoryKey === 'background'
          ? '/background/background-01.png'
          : '',
  }),
  {},
) as Layers
const layerSelects: (keyof Layers)[] = ['body', 'hat', 'glass', 'shirt', 'hand', 'background']

const PageView = () => {
  const [layerData, setLayerData] = useState<Layers>(defaultInventory)
  const [imageData, setImageData] = useState('')
  const resetLayers = () => {
    setLayerData(defaultInventory)
  }
  const randomizeLayers = () => {
    const randomized = layerSelects.reduce((acc, layer) => {
      const images = ['', ...inventory[layer].items.map((item) => item.image)]
      const randomIndex = Math.floor(Math.random() * images.length)
      return { ...acc, [layer]: images[randomIndex] }
    }, defaultInventory)
    setLayerData(randomized)
  }
  return (
    <div className="flex-1 max-w-screen-xl flex flex-col sm:flex-row w-full">
      <div className="flex justify-center items-center flex-col p-5 sm:py-0 sm:px-10 w-full sm:w-1/3">
        <CompiledImage layerData={layerData} onImageData={setImageData} />
        <div className="space-x-2 my-2 justify-center flex items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={'block'} size={'icon'} onClick={resetLayers}>
                <TimerResetIcon className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Reset</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={'block'} size={'icon'} onClick={randomizeLayers}>
                <ShuffleIcon className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Randomize</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={'block'}
                size={'icon'}
                onClick={() => {
                  const link = document.createElement('a')
                  link.download = 'muzki.png'
                  link.href = imageData
                  link.click()
                }}
              >
                <DownloadIcon className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Download</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="flex-1 sm:w-2/3">
        {layerSelects.map((layer, index) => (
          <LayerSelect
            key={index}
            title={inventory[layer].title}
            items={inventory[layer].items}
            selected={layerData[layer]}
            onSelect={(url) =>
              setLayerData({
                ...layerData,
                [layer]:
                  url === '' && layer === 'body'
                    ? '/body/body-01.png'
                    : url === '' && layer === 'background'
                      ? '/background/background-01.png'
                      : url,
              })
            }
          />
        ))}
      </div>
    </div>
  )
}
export default PageView
