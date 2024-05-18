import NextImage from 'next/image'
import { useEffect, useRef, useState } from 'react'

export type Layers = {
  body: string
  shirt: string
  background: string
  glass: string
  hand: string
  hat: string
}

type CombinedImageProps = {
  layerData: Layers
  onImageData: (imageData: string) => void
}

const layerIndexes: (keyof Layers)[] = ['background', 'body', 'glass', 'hat', 'shirt', 'hand']

const CombinedImage = ({ layerData, onImageData }: CombinedImageProps) => {
  const [combinedImageData, setCombinedImageData] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    const loadImage = (src: string) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = src
      })
    }

    const drawImages = async () => {
      if (!canvas || !context) return
      context.clearRect(0, 0, canvas.width, canvas.height)

      for (const layerIndex of layerIndexes) {
        // if (layerIndex === 'background') {
        //   const img = await loadImage('./muzki.jpg')
        //   context.drawImage(img, 0, 0, 1250, 1250)
        // }
        if (layerData[layerIndex] !== '') {
          const img = await loadImage(layerData[layerIndex])
          context.drawImage(img, 0, 0, 1250, 1250)
        }
      }

      const imageData = canvas.toDataURL()
      setCombinedImageData(imageData)
      onImageData(imageData)
    }

    drawImages()
  }, [layerData, onImageData])

  return (
    <>
      <canvas ref={canvasRef} width={1250} height={1250} style={{ display: 'none' }} />
      <div
        className="border-4 border-white max-w-[400px] max-h-[400px]"
        style={{
          backgroundImage: `url('./default/01blank-icon.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {combinedImageData && (
          <NextImage src={combinedImageData} alt="Combined Image" width={600} height={600} />
        )}
      </div>
    </>
  )
}

export default CombinedImage
