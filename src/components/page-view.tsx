'use client'
import { DownloadIcon, ShuffleIcon, TimerResetIcon } from 'lucide-react'
import { useState } from 'react'

import CompiledImage, { Layers } from '@/components/compiled-image'
import { Button } from '@/components/ui/button'
import inventory from '@/lib/inventory.json'

import LayerSelectNew from './layer-select-new'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
const defaultInventory = Object.keys(inventory).reduce(
  (acc, inventoryKey) => ({
    ...acc,
    [inventoryKey]:
      inventoryKey === 'body'
        ? '/body/abody.png'
        : inventoryKey === 'background'
          ? '/default/01blank.png'
          : inventoryKey === 'bubble'
            ? { image: '', content: '' }
            : '',
  }),
  {},
) as Layers
const layerSelects: (keyof Layers)[] = [
  'body',
  'hat',
  'glasses',
  'costume',
  'chain',
  'hand',
  'background',
  'land',
  'foreground',
  'bubble',
]

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
      return {
        ...acc,
        [layer]:
          images[randomIndex] === '' && layer === 'body'
            ? '/body/body-01.png'
            : images[randomIndex] === '' && layer === 'background'
              ? '/default/01blank.png'
              : layer === 'bubble'
                ? { image: '', content: '' }
                : images[randomIndex],
      }
    }, defaultInventory)
    setLayerData(randomized)
  }
  return (
    <div className="flex-1 max-w-screen-xl flex flex-col sm:flex-row w-full mb-10">
      <div className="flex  items-center flex-col p-5 sm:py-0 sm:px-10 w-full sm:w-1/3">
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
                  link.download = 'dixi.png'
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
      <div className="flex-1 sm:w-2/3 flex flex-wrap h-20">
        {layerSelects.map((layer, index) => (
          <div key={index} className="w-1/2 px-10 sm:px-0">
            <LayerSelectNew
              title={inventory[layer].title}
              items={inventory[layer].items}
              selected={layer == 'bubble' ? layerData[layer].image : layerData[layer]}
              onSelect={({ url, content }) => {
                setLayerData({
                  ...layerData,
                  [layer]:
                    layer === 'bubble'
                      ? {
                          image: url,
                          content,
                        }
                      : url === '' && layer === 'body'
                        ? '/body/abody.png'
                        : url === '' && layer === 'background'
                          ? '/default/01blank.png'
                          : url,
                })
              }}
              contentInput={
                layer == 'bubble'
                  ? {
                      title: 'Bubble Content',
                      placeholder: 'LFG $DIXI',
                    }
                  : undefined
              }
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default PageView
