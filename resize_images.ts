import fs from 'fs'
import path from 'path'

import sharp from 'sharp'

const folders = ['body', 'glass', 'hat', 'hand', 'shirt', 'background']

type InventoryItem = {
  title: string
  items: {
    image: string
    icon: string
    name: string
  }[]
}

function toCamelCase(input: string): string {
  return input.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
}

function toTitleCase(input: string): string {
  return input.replace(/(_|^)[a-z]/g, (match) => match.toUpperCase().replace('_', ' '))
}

// Function to read files in a directory
function readFilesInDirectory(directoryPath: string): string[] {
  try {
    const files = fs.readdirSync(directoryPath)
    return files.filter((file) => fs.statSync(path.join(directoryPath, file)).isFile())
  } catch (error) {
    console.error(`Error reading files in ${directoryPath}: ${error}`)
    return []
  }
}

// Function to create directories recursively
function createDirectory(directoryPath: string): void {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true })
  }
}

// Function to resize and save images to a new directory
async function resizeAndSaveImages(srcDirectory: string, destDirectory: string): Promise<void> {
  const images = readFilesInDirectory(srcDirectory)

  for (const image of images) {
    const srcImagePath = path.join(srcDirectory, image)
    const destImagePath = path.join(destDirectory, image)
    try {
      await sharp(srcImagePath).resize(1000, 1000).toFile(destImagePath)
      console.log(`Resized and saved: ${destImagePath}`)
    } catch (error) {
      console.error(`Error resizing image ${srcImagePath}: ${error}`)
    }
  }
}

// Function to process images in each folder
async function processImagesInFolders(folders: string[]): Promise<void> {
  const resizedDirectory = path.join(__dirname, 'resized')

  // Create the resized directory if it doesn't exist
  createDirectory(resizedDirectory)

  for (const folder of folders) {
    const srcFolderPath = path.join(__dirname, 'public', folder) // Source folder path
    const destFolderPath = path.join(resizedDirectory, folder) // Destination folder path

    // Create the destination folder if it doesn't exist
    createDirectory(destFolderPath)

    // Resize and save images
    await resizeAndSaveImages(srcFolderPath, destFolderPath)
  }
}

// Process images in each folder
processImagesInFolders(folders)
  .then(() => console.log('All images processed.'))
  .catch((error) => console.error(`Error processing images: ${error}`))
