import NextImage from 'next/image'
import { useEffect, useRef, useState } from 'react'

export type Layers = {
  body: string
  costume: string
  background: string
  land: string
  glasses: string
  hand: string
  hat: string
  chain: string
  foreground: string
  bubble: {
    image: string
    content: string
  }
}

type CombinedImageProps = {
  layerData: Layers
  onImageData: (imageData: string) => void
}

const layerIndexes: (keyof Layers)[] = [
  'background',
  'land',
  'body',
  'glasses',
  'hat',
  'costume',
  'chain',
  'hand',
  'foreground',
  'bubble',
]

const characterLayerIndexes = ['body', 'glasses', 'hat', 'costume', 'chain', 'hand']

const formatContentToLines = (words: string[], maxLength: number) => {
  const formattedLines = []
  let currentLine = ''

  words.forEach((word) => {
    if (currentLine.length + word.length + (currentLine ? 1 : 0) <= maxLength) {
      currentLine += (currentLine ? ' ' : '') + word
    } else {
      formattedLines.push(currentLine)
      currentLine = word
    }
  })

  if (currentLine) {
    formattedLines.push(currentLine)
  }

  return formattedLines
}

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

      const hasBubble = layerData.bubble.image != '' ? true : false
      for (const layerIndex of layerIndexes) {
        if (layerIndex === 'bubble' && layerData[layerIndex].image !== '') {
          const img = await loadImage(layerData[layerIndex].image)
          context.drawImage(img, 0, 0, 1250, 1250)

          const layerContent = layerData[layerIndex].content
          const xPos = 740
          let yPos = 80
          const maxYPos = 350
          let fontSize = 28
          const charsPerLine = 16

          if (charsPerLine >= layerContent.length) {
            yPos = yPos + (charsPerLine / layerContent.length) * 25
            fontSize = (fontSize * charsPerLine) / layerContent.length
          }

          context.fillStyle = 'black'
          context.font = `${fontSize}px __Press_Start_2P_b676d4`

          const contentArr = layerContent.split(/\s+/).map((str) => str.trim())
          const formattedContent = formatContentToLines(contentArr, charsPerLine)

          formattedContent.forEach((c) => {
            if (yPos >= maxYPos) return
            context.fillText(c, xPos, yPos)
            yPos += 45
          })
        } else if (layerIndex !== 'bubble' && layerData[layerIndex] !== '') {
          const xPos = characterLayerIndexes.includes(layerIndex) && hasBubble ? -250 : 0
          const yPos = characterLayerIndexes.includes(layerIndex) && hasBubble ? 50 : 0
          const img = await loadImage(layerData[layerIndex])
          context.drawImage(img, xPos, yPos, 1250, 1250)
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
        className="border-[#9c4a00] border-4 max-w-[400px] max-h-[400px]"
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
